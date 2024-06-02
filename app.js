const express = require("express");
const app = express();
const PORT = 9000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    username: "Walt Disney",
    message: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: uuidv4(),
    username: "Steve Jobs",
    message: "The only way to do great work is to love what you do.",
  },
  {
    id: uuidv4(),
    username: "Vince Lombardi",
    message:
      "The only place where success comes before work is in the dictionary.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  let { username, message } = req.body;
  posts.push({ username, message, id: uuidv4() });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show", { post });
});

app.post("/posts/search", (req, res) => {
  let { username } = req.body;
  let post = posts.find((p) => p.username === username);
  res.render("show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let content = req.body.content;
  let post = posts.find((p) => p.id === id);
  post.message = content;
  console.log(post.message);
  console.log("Patached");
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
