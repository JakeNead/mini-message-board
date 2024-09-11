const db = require("../db/queries");

const detailController = async (req, res) => {
  const message = await db.messageDetail(req.params.id);
  res.render("details", { title: "Message Details", message: message });
};

module.exports = detailController;
