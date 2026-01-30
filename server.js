const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ExamEase Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
