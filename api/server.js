import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.MYSQL_DB_HOST,
  port: process.env.MYSQL_DB_PORT,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_DATABASE,
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database 🎉');
  }
});

// Sample route
app.get("/", (req, res) => {
  res.send("🚀 CampusDine Backend is Running!");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
