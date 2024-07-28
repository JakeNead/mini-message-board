const messages = require("../messages");
const { DateTime } = require("luxon");

const indexController = (req, res) => {
  const messagesCopy = [...messages];
  messagesCopy.forEach((message) => {
    message.added = DateTime.now(message.added).toLocaleString(
      DateTime.DATE_MED
    );
  });

  res.render("index", { title: "Mini Message Board", messages: messagesCopy });
};
module.exports = indexController;
