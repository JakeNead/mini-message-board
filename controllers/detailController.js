const messages = require("../messages");

const detailController = (req, res) => {
  const message = messages.find((message) => message.id === req.params.id);

  res.render("details", { title: "Message Details", message: message });
};

module.exports = detailController;
