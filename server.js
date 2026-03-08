const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public));  // 추가

//회원가입
app. post("/register",(req,res) =>{
   const {username ,password } =req . body;

  const newUser = { username, password };

  fs.appendFileSync("users.txt",JSON.stringify(newUser) + "\n");
  res.json({ message : "회원가입 완료! });
            });
     
    const PORT = process.env.PORT || 3000; //수정

  app. listen(PORT,() =>{
    console.log("서버실행중");
  });
  
