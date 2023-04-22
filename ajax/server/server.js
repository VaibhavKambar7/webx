const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB
// mongoose.connect("mongodb://0.0.0:27017/", {
// useNewUrlParser: true,
// useUnifiedTopology: true
// }).then(()=>{
// console.log("Database connection established")
// });
//DB config
const connection_url = "mongodb://localhost:27017";
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the DB ...");
  });

// Define user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define user model
const User = mongoose.model("User", userSchema);

// Handle registration //registering new user
app.post("/api/register", async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    // Username already exists
    return res.status(400).send("Username already exists");
  }
  const { name, college, username, password } = req.body;
  const user = new User({ name, college, username, password });
  const data = await user.save();
  if (data) {
    console.log(data);
    res.status(200).send("Successfully registered");
  } else {
    res.status(500).send("Error registering user");
  }
});


app.post("/api/checkusername", async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    // Username already exists
    return res.status(200).json({ username: "Username already exists" });
  } else {
    return res.status(401).json({ existingUser });
  }
});


// Get list of existing usernames
app.get("/api/usernames", async (req, res) => {
  const usernames = await User.find({}, "username");
  // console.log(usernames);
  var usernamesArr = [];
  await usernames.map((username) => usernamesArr.push(username.username));
  if (usernamesArr.length > 0) {
    console.log(usernamesArr);
    return res.json({ usernamesArr });
  } else {
    return res.send("Error fetching username");
  }
});



// Get list of existing colleges
app.get("/api/colleges", async (req, res) => {
  const colleges = await User.distinct("college");
  if (colleges.length > 0) {
    res.json({ colleges });
  } else {
    return res.send("Error fetching colleges");
  }
});


app.listen(4400, () => {
  console.log("Server started on port 4400");
});
