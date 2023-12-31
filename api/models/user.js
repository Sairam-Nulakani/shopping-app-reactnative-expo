const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationToken: String,
  addresses: [
    {
      name: String,
      mobileNumber: String,
      houseNumber: String,
      street: String,
      landmark: String,
      city: String,
      country: String,
      pincode: String,
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date().toLocaleString(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
