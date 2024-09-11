const db = require("../db/queries");

const indexController = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
};
module.exports = indexController;
