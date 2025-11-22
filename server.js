/*const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "ace123",       // your MySQL password if any
  database: "gaming_db" // your database name
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// ✅ POST route for registration
app.post("/register", (req, res) => {
  const { playerName, email, gameName, teamName, teamSize, contact, gender } = req.body;

  console.log("✅ Registration Received:");
  console.log(req.body);

  // ✅ Match SQL columns (use underscores)
  const sql = `
    INSERT INTO registrations 
    (player_name, email, game_name, team_name, team_size, contact, gender)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [playerName, email, gameName, teamName, teamSize, contact, gender], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      res.status(500).send("Database error");
    } else {
      console.log("✅ Data inserted successfully!");
      res.send("🎉 Registration successful!");
    }
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running successfully on http://localhost:${PORT}`);
});*/
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'ace123',
  database: process.env.DB_NAME || 'gaming_db',
  port: process.env.DB_PORT || 3306
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL successfully!');
  }
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Handle /register from fetch()
app.post('/register', (req, res) => {
  const { playerName, email, gameName, teamName, teamSize, contact, gender } = req.body;

  const sql = `INSERT INTO registrations (player_name, email, game_name, team_name, team_size, contact, gender)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [playerName, email, gameName, teamName, teamSize, contact, gender], (err, result) => {
    if (err) {
      console.error('❌ Error inserting data:', err);
      return res.status(500).send('Database insert failed.');
    }
    console.log('✅ Registration successful:', result.insertId);
    res.send('🎉 Registration Successful!');
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
