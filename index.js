const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello all of you from Books server");
});

app.listen(port, (req, res) => {
  console.log(`Book server is running on port : ${port}`);
});
