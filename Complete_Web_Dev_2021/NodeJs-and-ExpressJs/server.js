import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.listen(3001);
