import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "enter-here.com",
    pass: "enter-here-pass",
  },
});

app.post("/send-email", (req, res) => {
  const { fullName, phone, email } = req.body;

  const mailOptions = {
    from: "enter-here@gmail.com",
    to: "enter-here@gmail.com",
    subject: "New Form Submission",
    text: `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error while sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
