const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("서버작동중");
});
const PORT = process.env.PORT
app.listen(PORT, () =>{
console.log("서버실행중: http://localhost:3000");
});