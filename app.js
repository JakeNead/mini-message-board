require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const router = require("./routes/routes");

const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => console.log(`server running on port ${port}`));
