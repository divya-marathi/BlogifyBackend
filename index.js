const express = require("express");
const mongoose = require("mongoose");
const BlogRouter = require("./route/route");
require("dotenv").config();
const cors = require("cors");
const { userModel } = require("./models/userModel");
const app = express();

// const PORT =process.env.PORT || 5000;
const PORT = 7000;

app.use(cors());
// Routing Area
app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let existUser;
  try {
    existUser =await userModel.findOne( {email,password}); 
  } catch (error) {
    return res.status(505).send(error);
  }
  console.log( existUser )
  if (existUser!=null) {
    return res.status(202).send("success");
  }
  return res.status(400).send("not found");
});

app.post("/register", async (req,res) => {
  const { email, password, name } = req.body;
  const NewUser = new userModel({
    email,
    password,
    name,
  });
  try {
    await NewUser.save();
  } catch (error) {
    return res.status(505).send(error);
  }
  return res.status(202).send("register Success");
});

app.use("/blog", BlogRouter);

const ConnectionDb = async () => {
  mongoose
    .connect(process.env.mongo_url)
    .then(() => {
      console.log("Mongodb Connected");
    })
    .catch((err) => console.log("mongodb is not connected"));
};
ConnectionDb();

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
