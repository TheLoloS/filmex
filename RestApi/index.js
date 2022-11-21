const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./db/User.js");
const Rank = require("./db/Score.js");
const Movie = require("./db/Movie");
const Series = require("./db/Series");

const JWT_SECRET =
  "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";

let port = 3001;
// let port = process.env.PORT || 3000;
const URI =
  "mongodb+srv://thelolos:Rayman123@cluster0.oioga.mongodb.net/rank_2048?retryWrites=true&w=majority";

(async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log("Database arledy connect!");
  } catch (error) {
    console.error("can't connect to the database because: " + error);
  }
})();

// app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/api/change-password", async (req, res) => {
  const { token, newpassword: plainTextPassword } = req.body;

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);

    const _id = user.id;

    const password = await bcrypt.hash(plainTextPassword, 10);

    await User.updateOne(
      { _id },
      {
        $set: { password },
      }
    );
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: ";))" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the username, password combination is successful

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", error: "Invalid username/password" });
});

app.post("/api/register", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      username,
      password,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});

app.post("/api/setscore", async (req, res) => {
  const { username, score } = req.body;

  Rank.find({ username: username })
    .exec()
    .then(async function (users) {
      let allUsers = [];
      users.forEach((e, i) => {
        const json = { username: users[i].username, score: users[i].score };
        allUsers.push(json);
      });
      if (!!allUsers.length) {
        if (Number(allUsers[0]?.score) < Number(score)) {
          try {
            Rank.deleteMany({ username: username }, function (err) {
              if (err) return handleError(err);
            });
            const response = await Rank.create({
              username,
              score,
            });
            console.log("Add score to the rank: ", response);
            res.json({ status: "ok" });
          } catch (error) {
            return res.json({
              status: "error",
              error: "can't add rank to score" + error,
            });
          }
        } else {
          res.json({ status: "ok", score: allUsers[0]?.score });
        }
      } else {
        try {
          const response = await Rank.create({
            username,
            score,
          });
          console.log("Add new score to the rank: ", response);
          res.json({ status: "ok" });
        } catch (error) {
          return res.json({
            status: "error",
            error: "can't add new rank to score" + error,
          });
        }
      }
      // const score = users[0].username;
      // res.json(allUsers);
    });
  //
});
app.get("/api/getscore", async (req, res) => {
  Rank.find({})
    .exec()
    .then(function (users) {
      let allUsers = [];
      users.forEach((e, i) => {
        const json = { username: users[i].username, score: users[i].score };
        allUsers.push(json);
      });

      // const score = users[0].username;
      res.json(allUsers);
    });
  // res.json({ status: "ok" });
});

app.get("/api/getmovies", cors(), async (req, res) => {
  Movie.find({})
    .exec()
    .then(function (movies) {
      let allMovies = [];
      movies.forEach((e, i) => {
        const json = {
          id: e.id,
          title: e.title,
          description: e.description,
          pictrueLink: e.pictrueLink,
          videoLink: e.videoLink,
          viewCounter: e.viewCounter,
          category: e.category,
          rating: e.rating,
        };
        allMovies.push(json);
      });

      res.json(allMovies);
    });
});

app.post("/api/setmovie", async (req, res) => {
  const {
    title,
    description,
    pictrueLink,
    videoLink,
    viewCounter,
    category,
    rating,
  } = req.body;

  try {
    const response = await Movie.create({
      title,
      description,
      pictrueLink,
      videoLink,
      viewCounter,
      category,
      rating,
    });
    console.log("Add new movie: ", response);
    res.json({ status: "ok" });
  } catch (error) {
    return res.json({
      status: "error",
      error: "can't add new movie" + error,
    });
  }
});

app;

app.listen(3001, () => {
  console.log(`http://localhost:${port}/`);
});
