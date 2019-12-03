const express = require("express");
require("./db/mongoose");
const port = process.env.PORT || 3000;
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(() => {
            res.send(user);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

app.get("/users/:id", (req, res) => {
    const _id = req.params.id;

    User.findById(_id)
        .then((user) => {
            if (!user) {
                return res.status(404).send();
            }

            res.send(user);
        })
        .catch((e) => {
            res.status(500).send();
        });
});

app.listen(port, () => {
    console.log("server is up on port " + port);
});