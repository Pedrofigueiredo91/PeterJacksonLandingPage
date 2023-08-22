const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
    console.log("hello")
  res.sendFile(__dirname + "/views/homepage.html");
});
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000"));
