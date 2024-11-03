const { default: mongoose } = require("mongoose");
const ConversationModel = require("./conversationModel");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  comment: {
    type: String,
  },
});
const linkSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
});
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  question: {
    type: String,
  },
  questionReplies: [
    {
      type: String,
    },
  ],
});
const courseDataSchema = new mongoose.Schema({
  sectionName: {
    type: String,
  },
  description: {
    type: String,
  },
  videoSection: [
    {
      title: {
        type: String,
      },
      videoUrl: {
        type: String,
      },
      videoLength: {
        type: Number,
      },
      links: [linkSchema],
      questions: [commentSchema],
    },
  ],
  videoPlayer: {
    type: String,
  },
});
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    estimatedPrice: {
      type: Number,
    },
    thumbnail: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    level: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },
    benefits: [{ title: String }],
    prerequisites: [{ title: String }],
    review: [reviewSchema],
    courseData: [courseDataSchema],
    course_enrolledBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
courseSchema.pre("save", async function (doc, next) {
  if (this.isModified("course_enrolledBy") && this.conversationId) {
    try {
      await ConversationModel.findByIdAndUpdate(this.conversationId, {
        participants: this.course_enrolledBy,
      });
    } catch (error) {
      next(error);
    }
  }
  next();
});

courseSchema.post("save", async function (doc, next) {
  try {
    if (!doc.conversationId) {
      const conversation = new ConversationModel({
        course_id: doc._id,
        participants: doc.publishedBy ? [doc.publishedBy] : [],
      });
      const savedConversation = await conversation.save();
      await CourseModel.findByIdAndUpdate(doc._id, {
        conversationId: savedConversation._id,
        course_enrolledBy: doc.publishedBy ? [doc.publishedBy] : [],
      });
    }
    next();
  } catch (err) {
    next(err);
  }
});

const CourseModel = mongoose.model("Course", courseSchema);
module.exports = CourseModel;
