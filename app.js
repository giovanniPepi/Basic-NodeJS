const express = require("express");

const app = express();

app.listen(3000);

//routes and redirects
app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});
app.get("/contact-me", (req, res) => {
  res.sendFile("./pages/contact-me.html", { root: __dirname });
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});
