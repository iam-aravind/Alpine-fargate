const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Kryptos Technology v0.1!, Successfully Deployed the update"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy Output");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
