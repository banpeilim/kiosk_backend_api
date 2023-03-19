const express = require("express");
const data = require("./data");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allow all origins
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/categories", (req, res) => res.send(data.categories));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`serve at http://localhost:${port}`));
