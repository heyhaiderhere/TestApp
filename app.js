const express = require("express");
const path = require("path");
const app = express();
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.listen(process.env.PORT);
