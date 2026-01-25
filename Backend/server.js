const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

// DB connection
const db = mysql.createConnection({
  host: "formdb.cw1wm64e8akc.us-east-1.rds.amazonaws.com", // Your RDS Endpoint
  user: "admin", // RDS user
  password: "masterMYSQL", //  RDS password
  database: "formdb" // RDS Database name
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to RDS MySQL");
});

// API
app.post("/api/submit", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    () => res.send("Data saved successfully")
  );
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    res.json(results);
  });
});