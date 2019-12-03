const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.get("", (req, res) => {
    res.send("<h1>hello from express</h1>");
});

app.get("/weather", (req, res) => {
    res.send("found the weather page");
});

app.get("*", (req, res) => {
    res.send("page not found :(");
});

app.listen(port, () => {
    console.log("server is up on port " + port);
});