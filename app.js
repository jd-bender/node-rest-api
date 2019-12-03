const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname)

app.get("", (req, res) => {
    res.send("<h1>hello from express</h1>");
});

app.get("/weather", (req, res) => {
    res.send("found the weather page");
});

app.get("*", (req, res) => {
    res.send("page not found :(");
});

let port = 3000;

app.listen(port, () => {
    console.log("server is up on port " + port);
});