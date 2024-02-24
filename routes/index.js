var express = require("express");
var router = express.Router();
var messages = require("./messages");

/* GET and POST home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
