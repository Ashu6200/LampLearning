const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../configs/config");
const UserModel = require("./userModel");
const { ELoginTypes, ERoleType } = require("../constant/constant");

const accountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
    },
    role: [
      {
        type: String,
        required: true,
        default: ERoleType.USER,
        enum: [ERoleType.USER, ERoleType.ADMIN, ERoleType.INSTRUCTOR],
      },
    ],
    loginType: {
      type: String,
      required: true,
      default: ELoginTypes.EMAIL_AND_PASSWORD_LOGIN,
      enum: [ELoginTypes.EMAIL_AND_PASSWORD_LOGIN, ELoginTypes.GOOGLE_LOGIN],
    },
  },
  {
    timestamps: true,
  }
);

accountSchema.index({ userId: 1, email: 1 });
accountSchema.pre("save", async next => {
  if (!this.isModified(password)) {
    netx();
  }
  this.password = await bcrypt.hash(password, 10);
  next();
});
accountSchema.post("save", async function (doc, next) {
  try {
    if (!doc.userId) {
      const user = new UserModel({
        accountId: doc._id,
        name: doc.tempName,
      });
      const savedUser = await user.save();
      await AccountModel.findByIdAndUpdate(doc._id, { userId: savedUser._id });
    }
    next();
  } catch (error) {
    next(error);
  }
});
accountSchema.methods.SignAccessToken = function () {
  return jwt.sign(
    { accountId: this._id, email: this.email },
    config.ACCESSTOKEN || "",
    {
      expiresIn: "5m",
    }
  );
};
accountSchema.methods.SignRefreshToken = function () {
  return jwt.sign(
    { accountId: this._id, email: this.email },
    config.REFRESHTOKEN || "",
    {
      expiresIn: "7d",
    }
  );
};

accountSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const AccountModel = mongoose.model("Account", accountSchema);
module.exports = AccountModel;
