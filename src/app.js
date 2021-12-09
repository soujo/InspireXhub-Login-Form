const express = require("express");
const { urlencoded } = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 80;
const views__path = path.join(__dirname, "../views");
const static__path = path.join(__dirname, "../static");

app.use("/static", express.static(static__path));
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", views__path);


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", (req, res) => {

    const id = req.body.id;
    const password = req.body.password;
    if (password == "123" && id == "random") {
        res.send("Welcome to homepage");
    }
    else {
        res.send("Wrong User");
    }
});

app.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
});