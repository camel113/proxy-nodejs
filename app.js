const axios = require("axios");
const express = require("express");
const request = require("request");
const app = express();
const port = 4000;

app.all("*", async (req, res, next) => {
  try {
    console.log(req.url);
    console.log("=======");
    const url = req.url.substr(1);
    console.log(url);
    console.log("#######");
    req
      .pipe(request(url))
      .on("error", function (err) {
        console.error(err);
        res.status(500).send("Error connecting to the model microservice");
      })
      .pipe(res);
  } catch (err) {
    console.log("Error");
    console.log(error);
    next();
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
