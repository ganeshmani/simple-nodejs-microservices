const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/task", (req, res) => {
  res.send("Welcome to TaskService");
});

app.listen(4501, () => {
  console.log("Listening on PORT 4501");
});
