const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend работает 🚀");
});

app.listen(3001, () => {
  console.log("Сервер запущен на http://localhost:3001");
});
