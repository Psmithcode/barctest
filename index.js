const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || "8080";

app.get("/", (req, res) => {
  res.json("hello world");
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});