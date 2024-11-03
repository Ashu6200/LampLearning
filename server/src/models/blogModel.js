const { default: mongoose } = require("mongoose");

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["image", "code", "text", "resource"],
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: [contentSchema],
    isPublised: {
      type: Boolean,
      default: false,
      required: true,
    },
    publishedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    coverImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.index({ _id: 1, publishedBy: 1, isPublised: 1 });
const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;
