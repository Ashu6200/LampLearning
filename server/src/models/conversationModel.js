const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content_type: {
      type: String,
      enum: ["text", "code", "image"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    reply_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation.messages",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const conversationSchema = new mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      index: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

conversationSchema.index({ course_id: 1 });

const ConversationModel = mongoose.model("Conversation", conversationSchema);

module.exports = ConversationModel;
