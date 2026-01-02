const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require('uuid');
// uuidv4();
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
let posts = [
  { id : uuidv4(), username: "apnacollege", content: "I love Coding" },
  {
    id : uuidv4(),username: "Jake Walker",
    content: "Hardwork is important to achieve something..",
  },
  { id : uuidv4(),username: "Anna Hathaway", content: "I got an Oscar!!" },
];

app.get("/", (req, res) => {
  res.send("Server working well!!");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req,res) => {
  res.render("new.ejs");
});
app.post("/posts", (req,res) => {
  // console.log(req.body);
  let {username , content} = req.body;
  let id = uuidv4();
  posts.push({id, username,content});
  // res.send("Post request working!!")
  res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
  let {id} = req.params;
  // console.log(id);
  let post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }
  // console.log(post);
  // res.send("Request working!!")
  res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) => {
  let {id} = req.params;
  let newContent = req.body.content;
  // console.log(newContent);
  let post = posts.find(p => p.id === id);
  post.content = newContent;
  console.log(post);
  // res.send("patch request working");
  res.redirect("/posts")
});

app.get("/posts/:id/edit", (req,res) => {
  let {id} = req.params;
  let post = posts.find(p => p.id === id);

  res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req,res) => {
  let {id} = req.params;
  posts = posts.filter(p => p.id !== id);

  // res.send("Delete success")
  res.redirect("/posts");
})
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
