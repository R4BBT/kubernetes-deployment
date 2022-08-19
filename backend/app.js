const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  console.log("request received");
  res.status(200).json({ message: "hello, there" });
});

app.listen(port, () => {
  console.log(`Example backend listening on port ${port}`);
});
