const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:<db_password>@cluster1.ikfzbgm.mongodb.net/?appName=Cluster1");

const Quiz = mongoose.model("Quiz", {
  q1:String,q2:String,q3:String,
  q4:String,q5:String,q6:String,
  q7:String,q8:String,q9:String,q10:String
});

app.post("/submit", async (req,res)=>{
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.send("Saved");
});

app.listen(5000, ()=>console.log("Server running"));