const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/project", (req, res) => {
  res.send("Welcome to ProjectService");
});

app.listen(4500, () => {
  console.log("Listening on PORT 4500");
});
