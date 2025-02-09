const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const nodeMailer = require("nodemailer");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Connect to Database
connectDB();

// Routes
// app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

app.post("/send-email", async (req, res) => {
  try {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: "dhivilearning@gmail.com",
        pass: "zsfc uwlz ubmo uypn",
      },
    });

    const mailOptions = {
      from: "dhivilearning@gmail.com",
      to: req.body.email,
      subject: "Password Reset",
      text: "You are receiving this because you (or someone else) have requested the reset of the password for your account",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
    s;
  } catch {}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
