const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const formController = require("../controllers/formController");
const submitFormController = require("../controllers/submitFormController");
const detailsController = require("../controllers/detailController");

router.get("/messages", indexController);

router.get("/messages/:id", detailsController);

router.get("/new", formController);

router.post("/new", submitFormController);

module.exports = router;
