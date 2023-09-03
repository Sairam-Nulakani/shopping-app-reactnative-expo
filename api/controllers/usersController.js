const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

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

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

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
      res.status(200).json(newUser);
      sendVerificationEmail(newUser.email, newUser.verificationToken);
    } catch (err) {
      return res.status(500).json("Failed to Register");
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json("No User with given credentials"); // Return and exit
      }
      if (user.password !== password) {
        return res.status(401).json("Wrong Password"); // Return and exit
      }
      const token = jwt.sign({ userId: user._id }, secretKey);
      res.status(200).json({ token });
    } catch (err) {
      return res.status(500).json({ message: "Failed to log in" });
    }
  },
};
