const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

let users = {}; // { username: { level, coins } }

app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!users[username]) {
    users[username] = { level: 0, coins: 200 };
  }
  res.json(users[username]);
});

app.post("/save", (req, res) => {
  const { username, level, coins } = req.body;
  users[username] = { level, coins };
  res.json({ status: "saved" });
});

app.get("/ranking", (req, res) => {
  const ranking = Object.entries(users)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.level - a.level);
  res.json(ranking);
});

app.listen(3000, () => console.log("Server running"));