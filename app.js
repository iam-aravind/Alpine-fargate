const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Kryptos Technology!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy Output");
});

app.listen(80, () => {
  console.log("App listening on port 80!");
});
