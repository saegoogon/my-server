const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

// 회원가입
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const newUser = { username, password };

  fs.appendFileSync("users.txt", JSON.stringify(newUser) + "\n");

  res.json({ message: "회원가입 완료!" });
});

app.listen(3000, () => {
  console.log("서버 실행중");
