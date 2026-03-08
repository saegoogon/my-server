const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));  

app.get("/", (req,res) => {
   res.sendFile(__dirname + "/public/index.html");
});


app. post("/register",(req,res) =>{
   const {username ,password } =req . body;

  const newUser = { username, password };

  fs.appendFileSync("users.txt",JSON.stringify(newUser) + "\n");
  res.json({ message : "회원가입 완료! });
            });
     
    const PORT = process.env.PORT || 3000; 

  app. listen(PORT,() =>{
    console.log("서버실행");
  });
  
