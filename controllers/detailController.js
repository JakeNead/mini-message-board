const messages = require("../messages");

const detailController = (req, res) => {
  const message = messages.find((message) => message.id === req.params.id);

  //find out why the above is returning undefined. probably something with my generated id

  //   const test = messages.find((message) => message.user === "Amando");

  //   console.log(req.params.id);
  console.log(message);

  res.render("details", { title: "Message Details", message: message });
};

module.exports = detailController;
