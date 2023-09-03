const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, verificationToken) => {
  //nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sairamnulakani4@gmail.com",
      pass: "txxshqlrxpeldqbw",
    },
  });
  const mailOptions = {
    from: "shoppingcart.com",
    to: email,
    subject: "Email verification",
    text: `Please Click the Following link to verify your email : http://localhost:8080/verify/${verificationToken}`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("Error sending verification email", err);
  }
};

module.exports = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const exist = await User.findOne({ email });
      if (exist) {
        return res.status(400).json("Already registered with this email");
      }
      const newUser = new User({ name, email, password });
      newUser.verificationToken = crypto.randomBytes(20).toString("hex");
      await newUser.save();
      return res.status(200).json(newUser);
      sendVerificationEmail(newUser.email, newUser.verificationToken);
    } catch (err) {
      return res.status(500).json("Failed to Register");
    }
  },
};
