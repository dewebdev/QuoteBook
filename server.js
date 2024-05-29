const express = require("express");
const app = express();
const PORT = 9000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Walt Disney",
    message: "The way to get started is to quit talking and begin doing.",
  },
  {
    username: "Steve Jobs",
    message: "The only way to do great work is to love what you do.",
  },
  {
    username: "Vince Lombardi",
    message:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    username: "Eleanor Roosevelt",
    message:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    username: "John Wooden",
    message:
      "Things work out best for those who make the best of how things work out.",
  },
  {
    username: "Albert Einstein",
    message:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    username: "Helen Keller",
    message:
      "The only thing worse than being blind is having sight but no vision.",
  },
  {
    username: "Zig Ziglar",
    message: "Your attitude, not your aptitude, will determine your altitude.",
  },
  {
    username: "Confucius",
    message: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    username: "Maya Angelou",
    message:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    username: "Mark Twain",
    message: "The secret of getting ahead is getting started.",
  },
  {
    username: "Nelson Mandela",
    message:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
