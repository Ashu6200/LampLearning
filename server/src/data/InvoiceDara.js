const userIds = Array.from({ length: 25 }, () => new mongoose.Types.ObjectId());

const courseIds = Array.from(
  { length: 20 },
  () => new mongoose.Types.ObjectId()
);
const conversationIds = Array.from(
  { length: 20 },
  () => new mongoose.Types.ObjectId()
);
const invoiceIds = Array.from(
  { length: 34 },
  () => new mongoose.Types.ObjectId()
);

const invoice = [
  //course0
  {
    _id: invoiceIds[0],
    userId: userIds[1],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[0],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-04-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-04-15"),
    updated_at: new Date("2024-04-15"),
  },
  {
    _id: invoiceIds[1],
    userId: userIds[2],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[0],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course1
  {
    _id: invoiceIds[2],
    userId: userIds[2],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[1],
      coursePrice: 599.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 599.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course2
  {
    _id: invoiceIds[3],
    userId: userIds[2],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[2],
      coursePrice: 799.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 799.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[4],
    userId: userIds[3],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[2],
      coursePrice: 799.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 799.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course3
  {
    _id: invoiceIds[5],
    userId: userIds[3],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[3],
      coursePrice: 299.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 299.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[6],
    userId: userIds[4],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[3],
      coursePrice: 299.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 299.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course4
  {
    _id: invoiceIds[7],
    userId: userIds[5],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[4],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course5
  {
    _id: invoiceIds[8],
    userId: userIds[6],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[5],
      coursePrice: 599.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 599.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course6
  {
    _id: invoiceIds[9],
    userId: userIds[7],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[6],
      coursePrice: 299.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 299.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },

  {
    _id: invoiceIds[10],
    userId: userIds[9],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[6],
      coursePrice: 299.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 299.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },

  //course7
  {
    _id: invoiceIds[11],
    userId: userIds[7],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[7],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[12],
    userId: userIds[9],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[7],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course8
  {
    _id: invoiceIds[13],
    userId: userIds[9],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[8],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course9
  {
    _id: invoiceIds[14],
    userId: userIds[10],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[9],
      coursePrice: 999.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 999.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course10
  {
    _id: invoiceIds[15],
    userId: userIds[11],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[10],
      coursePrice: 999.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 999.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course11
  {
    _id: invoiceIds[16],
    userId: userIds[13],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[11],
      coursePrice: 599.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 599.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course12
  {
    _id: invoiceIds[17],
    userId: userIds[14],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[12],
      coursePrice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 499.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course13
  {
    _id: invoiceIds[18],
    userId: userIds[14],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[13],
      coursePrice: 1099.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 1099.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course14
  {
    _id: invoiceIds[19],
    userId: userIds[15],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[14],
      coursePrice: 799.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 799.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course15
  {
    _id: invoiceIds[20],
    userId: userIds[16],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[15],
      coursePrice: 699.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 699.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course16
  {
    _id: invoiceIds[21],
    userId: userIds[17],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[16],
      coursePrice: 1299.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 1299.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course17
  {
    _id: invoiceIds[22],
    userId: userIds[18],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[17],
      coursePrice: 1299.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 1299.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course18
  {
    _id: invoiceIds[23],
    userId: userIds[19],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[18],
      coursePrice: 849.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 849.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //course19
  {
    _id: invoiceIds[24],
    userId: userIds[19],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[19],
      coursePrice: 899.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[25],
    userId: userIds[21],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[19],
      coursePrice: 899.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[26],
    userId: userIds[22],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[19],
      coursePrice: 899.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[27],
    userId: userIds[23],
    orderType: "course_purchase",
    courseOrder: {
      courseId: courseIds[19],
      coursePrice: 899.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  //teacher1
  {
    _id: invoiceIds[28],
    userId: userIds[4],
    orderType: "instructor_fee",
    courseOrder: {
      instructorId: userIds[4],
      instructorprice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[29],
    userId: userIds[8],
    orderType: "instructor_fee",
    courseOrder: {
      instructorId: userIds[8],
      instructorprice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[30],
    userId: userIds[12],
    orderType: "instructor_fee",
    courseOrder: {
      instructorId: userIds[12],
      instructorprice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[31],
    userId: userIds[16],
    orderType: "instructor_fee",
    courseOrder: {
      instructorId: userIds[16],
      instructorprice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[32],
    userId: userIds[20],
    orderType: "instructor_fee",
    courseOrder: {
      instructorId: userIds[20],
      instructorprice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
  {
    _id: invoiceIds[33],
    userId: userIds[24],
    orderType: "instructor_fee",
    courseOrder: {
      instructorId: userIds[24],
      instructorprice: 499.99,
    },
    instructorOrder: null,
    orderDate: new Date("2024-05-15"),
    paymentStatus: "paid",
    amount: 899.99,
    created_at: new Date("2024-05-15"),
    updated_at: new Date("2024-05-15"),
  },
];