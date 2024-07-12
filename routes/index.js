const messages = [
  {
    text: "You're a Jedi, Harry.",
    user: "Gandalf",
    added: new Date(),
  },
  {
    text: "You look like a flat soda, pal.",
    user: "Charles Barkley",
    added: new Date(),
  },
  {
    text: "Third message",
    user: "Dev",
    added: new Date(),
  },
];

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini-Message Board", messages: messages });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  const message = req.body.message;
  const user = req.body.user;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
