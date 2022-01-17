const db = require('../../db');
const express = require('express');
const router = express.Router();

router.get("/", async (_, res) => {
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

module.exports = router;