const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require("validator");
require("dotenv").config();

const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

mongoose
  // .connect("mongodb://127.0.0.1:27017/studentdb")
  .connect(process.env.DB, {
    dbName: "studentdb",
  })
  .then((res) => console.log("mongo Connected" + res))
  .catch((err) => console.log("Error: " + err));

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  phone: {
    type: Number,
    min: [10, "Phone Number should be 10 Number"],

    required: [true, "Phone is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
    },
  },
});

const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
  res.send("This is the server home page.");
});

app.get("/register", async (req, res) => {
  try {
    const studentData = await Student.find();
    console.log(studentData);
    res.send(studentData);
  } catch (err) {
    res.send(err.message);
    console.log(err);
  }
  //   res.send("This is the  Registration page.");
});

app.post("/register", (req, res) => {
  const student = new Student(req.body);
  student
    .save()
    .then(() => {
      res.send(req.body);
      console.log(req.body);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});

app.delete("/register", async (req, res) => {
  console.log(req.query.id);
  const _id = req.query.id;
  try {
    //   res.send(req.query.id);
    const deleteStudent = await Student.findByIdAndDelete(_id);
    res.send(`Record Successfully deleted ${JSON.stringify(deleteStudent)}`);
    console.log(deleteStudent);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.patch("/register", async (req, res) => {
  //   console.log(req.body);
  try {
    const _id = req.body._id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
    res.send("updated Student Data Successfully");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
