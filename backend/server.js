require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// GET template
// app.get('/api/v1', async (_, res) => {
//   try {
//     const results = await db.query("");
//     res.status(200).json({
//       status: "Success",
//       data: {
//         data: results.rows,
//       }
//     })
//   } catch (err) {
//     console.log(err);
//   }
// })

app.get('/api/v1/users', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM users;");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/source', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM source;");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/article', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM article");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/post', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM post");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/comment', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM comment");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/stack', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM stack");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/stack_card', async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM stack_card");
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

// app.post('/api/v1', async (req, res) => {
//   try {
//     await db.query(`INSERT INTO test_table (name) VALUES ('${req.body.name}');`);
//     res.status(201).json({
//       status: "Success",
//     })
//   } catch (err) {
//     console.log(err);
//   }
// })

app.listen(port, () => {
  console.log(`Stack listening at http://localhost:${port}`);
})