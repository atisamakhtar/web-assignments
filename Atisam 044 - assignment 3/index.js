app.set("view engine", "ejs");

app.get("/about", (req, res) => {
    console.log(req);
    console.log(res);
    res.render("/about")
})