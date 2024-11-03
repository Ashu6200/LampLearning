const { default: mongoose } = require("mongoose");
const ConversationModel = require("../models/conversationModel");
const ApiError = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const getCourseConversation = asyncHandler(async (req, res, next) => {
  try {
    const { courseId, conversationId } = req.params;

    const conversation = await ConversationModel.aggregate([
      {
        $match: {
          course_Id: new mongoose.Schema.Type.ObjectId(courseId),
          _id: new mongoose.Schema.Type.ObjectId(conversationId),
        },
      },
      {
        $unwind: "$messages",
      },
      {
        $lookup: {
          from: "users",
          localField: "messages.sender_id",
          foreignField: "_id",
          as: "sender",
        },
      },
      {
        $unwind: "$sender",
      },
      {
        $lookup: {
          from: "conversations",
          let: { replyToId: "$messages.reply_to" },
          pipeline: [
            { $unwind: "$messages" },
            { $match: { $expr: { $eq: ["$messages._id", "$$replyToId"] } } },
            {
              $project: {
                content: "$messages.content",
                content_type: "$messages.content_type",
                sender: "$messages.sender_id",
                createdAt: "$messages.createdAt",
              },
            },
          ],
          as: "repliedMessage",
        },
      },
      {
        $unwind: {
          path: "$repliedMessage",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: {
            date: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$messages.createdAt",
              },
            },
          },
          messages: {
            $push: {
              content: "$messages.content",
              content_type: "$messages.content_type",
              sender: "$sender.name",
              createdAt: "$messages.createdAt",
              reply_to: {
                content: "$repliedMessage.content",
                content_type: "$messages.content_type",
                sender: "$repliedMessage.sender",
                createdAt: "$repliedMessage.createdAt",
              },
            },
          },
        },
      },
      {
        $sort: { "_id.date": 1 },
      },
    ]);

    if (!conversation || conversation.length === 0) {
      return ApiError(next, "Conversation not found", req, 404);
    }
    const message = "You have successfully fetch Participants";
    return ApiResponse(req, res, message, conversation, 200);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});

const getCourseConversationsParticipants = asyncHandler(
  async (req, res, next) => {
    try {
      const { courseId, conversationId } = req.params;
      const conversation = await ConversationModel.aggregate([
        {
          $match: {
            course_Id: new mongoose.Schema.Type.ObjectId(courseId),
            _id: new mongoose.Schema.Type.ObjectId(conversationId),
          },
        },
        {
          $unwind: "$participants",
        },
        {
          $lookup: {
            from: "users",
            localField: "participants",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        {
          $group: {
            _id: "$_id",
            participants: {
              $push: {
                _id: "$user._id",
                accountId: "$user.accountId",
                userId: "$user._id",
                name: "$user.name",
              },
            },
          },
        },
      ]);
      if (!conversation || conversation.length === 0) {
        const error = new Error("Conversation not found");
        return ApiError(next, error, req, 404);
      }
      const message = "You have successfully fetch Participants";
      return ApiResponse(req, res, message, 200, conversation);
    } catch (error) {
      return ApiError(next, error, req, 500);
    }
  }
);

const sendMessage = asyncHandler(async (req, res, next) => {
  try {
    const { courseId, conversationId } = req.params;
    const { userId } = req.user;
    const { content, content_type, reply_to } = req.body;
    if (!content || !content_type) {
      return ApiError(next, "Message content and type are required", req, 400);
    }

    const message = {
      sender_id: mongoose.Types.ObjectId(userId),
      content,
      content_type,
      ...(reply_to && { reply_to: mongoose.Types.ObjectId(reply_to) }),
    };

    const result = await ConversationModel.updateOne(
      {
        course_id: mongoose.Types.ObjectId(courseId),
        _id: mongoose.Types.ObjectId(conversationId),
      },
      {
        $push: { messages: message },
      }
    );
    if (result.matchedCount === 0) {
      const error = new Error("Conversation not found");
      return ApiError(next, error, req, 404);
    }
    const responseMessage = "Message sent successfully";
    return ApiResponse(req, res, responseMessage, 200, message);
  } catch (error) {
    return ApiError(next, error, req, 500);
  }
});

module.exports = { getCourseConversation, getCourseConversationsParticipants, sendMessage }