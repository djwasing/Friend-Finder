const express = require("express");
var path = require("path");
const fs = require("fs");
var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
})