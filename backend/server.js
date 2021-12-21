require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());

app.get('/api/v1', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM test_table;");
    res.status(200).json({
      status: "Success",
      results: results.rows.length,
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.post('/api/v1', async (req, res) => {
  try {
    await db.query(`INSERT INTO test_table (name) VALUES ('${req.body.name}');`);
    res.status(201).json({
      status: "Success",
    })
  } catch (err) {
    console.log(err);
  }
})

app.listen(port, () => {
  console.log(`Stack listening at http://localhost:${port}`);
})