var express = require("express");
var router = express.Router();
var messages = require("./messages");

/* GET new page. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "New Message Form" });
});

/* POST new message. */
router.post("/", function (req, res, next) {
  // Handle the POST request to add a new message
  const { user, text } = req.body;

  // Add a new message to the shared messages array
  const newMessage = {
    text: text,
    user: user,
    added: new Date(),
  };

  messages.push(newMessage);

  // Redirect to the home page after adding the message
  res.redirect("/");
});

module.exports = router;
