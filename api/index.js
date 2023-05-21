const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const formModel = require("./models/formModel");
const cors = require('cors');
const nodemailer = require('nodemailer')

const app = express();

// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB", err));

app.use(cors({
  credentials:true,
  origin: 'http://localhost:5173',
}))
// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route for receiving form data
app.post("/contact", async (req, res, next) => {
  // Validate the form data
  const { firstName, lastName, phone, email, subject, message } = req.body;
  if (!firstName|| !lastName || !phone || !email || !subject || !message) {
    return res.status(400).send("All fields are required.");
  }
  console.log(firstName, lastName, phone, email, subject, message)
  // Create a new instance of the MyData model with the form data
  let newData = new formModel(req.body);
  await newData.save();
  res.send("Data saved successfully.");

  //send email notification to admin
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVER,
    auth:{
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_USER_PASSWORD
    },

  });

  const emailOptions ={
    from: process.env.MAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `CLIENT ENQUIRY`,
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Phone Number: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Subject: ${subject}</p>
      <p>Message: ${message}</p>
    `
  };
  transporter.sendMail(emailOptions,(error, info)=>{
    if(error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }else{
      console.log(`Email Sent: ${info.response}`);
      res.send('Form submitted successfully')
    }
  })


});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
