const messages = require("../messages");

const submitFormController = (req, res) => {
  //add contents to messages then redirect

  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
    id: crypto.randomUUID(),
  });
  res.redirect("/messages");
};

module.exports = submitFormController;
