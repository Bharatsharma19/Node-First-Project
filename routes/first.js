var express = require("express");
var router = express.Router();

router.get("/first", function (req, res) {
  res.render("first", {
    name: "Bharat Sharma",
    desg: "Software Developer",
    salary: 1024659796,
  });
});

module.exports = router;
