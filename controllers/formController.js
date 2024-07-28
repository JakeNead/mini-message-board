const formController = (req, res) => {
  res.render("form", { title: "New Message" });
};

module.exports = formController;
