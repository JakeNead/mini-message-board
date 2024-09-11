// const messages = require("../messages");
const db = require("../db/queries");

function formatDateToUTC(date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

const submitFormController = async (req, res) => {
  await db.newMessage(
    req.body.user,
    req.body.message,
    formatDateToUTC(new Date())
  );
  res.redirect("/messages");
};

module.exports = submitFormController;
