const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const FormData = require("./models/formModel");

const app = express();

// Connect to MongoDB
mongoose
.connect("mongodb://127.0.0.1/mechweld", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB", err));

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route for receiving form data
app.post("/contact", (req, res) => {
  // Validate the form data
  const { firstName, lastName, phone, email, subject, message } = req.body;
  if (!firstName|| lastName || !phone || !email || !subject || !message) {
    return res.status(400).send("All fields are required.");
  }

  // Create a new instance of the MyData model with the form data
  const newData = new FormData({ firstName, lastName, phone, email, subject, message });

  // Save the new data to the database
  newData.save((err) => {
    if (err) {
        console.log("Error saving data to the database:", err);
      return res.status(500).send(err);
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    console.log("Data saved successfully:", newData);
    return res.send("Data saved successfully.");
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});






// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const FormData = require("./models/formModel")
// const app = express();

// app.use(express.json());
// app.use(cors({
//     Credential: true,
//     origin: 'http://localhost:5173'
// }))
// mongoose.connect('mongodb://127.0.0.1/mechweld')
// app.post('/contact', async (req, res) => {
//     const {  firstName,lastName,phone,email,subject,message } = req.body;
//     try {
//         const formData = await FormData.create({
//         firstName,
//         lastName,
//         phone,
//         email,
//         subject,
//         message
//         })
//         res.send('Data sent').json(formData);
//         console.log('Operation Successfully')
//     } catch (error) {
//         console.log('Operation Failed')

//     }

// })
// app.listen(3005)
