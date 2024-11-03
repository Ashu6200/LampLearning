const mongoose = require("mongoose");
const { EOrderType, EPaymentStatus } = require("../constant/constant");

const CourseOrderSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  coursePrice: {
    type: Number,
  },
});
const InstructorOrderSchema = new mongoose.Schema({
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  instructorprice: {
    type: Number,
    required: true,
    default: 499.99,
  },
});

const InvoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },
    orderType: {
      type: String,
      enum: [EOrderType.COURSEPURCHASE, EOrderType.INSTRUCTORFEE],
      required: true,
      index: true,
    },
    courseOrder: CourseOrderSchema,
    instructorOrder: InstructorOrderSchema,
    orderDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: [
        EPaymentStatus.PENDING,
        EPaymentStatus.PAID,
        EPaymentStatus.FAILED,
      ],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
InvoiceSchema.index({ userId: 1, orderDate: 1, orderType: 1 });

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema);
module.exports = InvoiceModel;
