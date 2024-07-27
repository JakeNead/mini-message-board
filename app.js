require("dotenv").config();
const express = require("express");
const app = express();

const indexRouter = require("./routes/routes");

const port = process.env.PORT || 3000;

app.use("/", indexRouter);

app.listen(port, () => console.log(`server running on port ${port}`));
