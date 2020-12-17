import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log(`<h1>Hello</h1>`);
  next();
});

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3001);
