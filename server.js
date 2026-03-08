const express = require("express");

const app = express ();

app.use(express.static("public"));

app.get("/",(req, res) => {
   res.send("서버작동중");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버실행중");
});
