const express = require("express");
require("./db/mongoose");
const port = process.env.PORT || 3000;
const userRouter = require("./routers/user");

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log("server is up on port " + port);
});