require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5050;

const userRoutes = require('./api/routes/users');
const sourceRoutes = require('./api/routes/source');
const articleRoutes = require('./api/routes/article');
const postRoutes = require('./api/routes/post');
const commentRoutes = require('./api/routes/comment');
const stackRoutes = require('./api/routes/stack');
const stackCardRoutes = require('./api/routes/stack_card');

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/source", sourceRoutes);
app.use("/api/v1/article", articleRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/comment", commentRoutes);
app.use("/api/v1/stack", stackRoutes);
app.use("/api/v1/stack_card", stackCardRoutes);

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