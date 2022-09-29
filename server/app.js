const express = require("express");

const app = express();

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const phonesRoutes = require("./routes/phones.routes");
app.use("/api", phonesRoutes);

module.exports = app