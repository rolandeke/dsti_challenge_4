require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./db/db");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const ejsLayouts = require("express-ejs-layouts");
const apiRoute = require("./routes/api");
const indexRoute = require("./routes/index");

const app = express();

app.use(cors());
ConnectDB();
app.use(ejsLayouts);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoute);
app.use("/", indexRoute);

const PORT = 3002;
app.listen(PORT, () => console.log(`Application Listening on port ${PORT}`));
