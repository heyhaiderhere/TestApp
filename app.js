const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.listen(port);
