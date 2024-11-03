const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      index: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    profile_picture: {
      type: String,
      default: "",
    },
    courses_enrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    courses_saved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    courses_published: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    courses_conversation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
    blogs_published: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    blogs_saved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  {
    autoIndex: false,
    timestamps: true,
  }
);
userSchema.index({
  accountId: 1,
  courses_enrolled: 1,
  courses_saved: 1,
  courses_published: 1,
  courses_conversation: 1,
  blogs_published: 1,
  blogs_saved: 1,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
