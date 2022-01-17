const db = require('../../db');
const express = require('express');
const router = express.Router();

/*
  TODO: Add check-auth middleware
  Gets all users (WARNING: CONTAINS SENSITIVE INFO. USE /userinfo API CALL IF POSSIBLE)
*/
router.get("/users", async (_, res) => {
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

/*
  Safer alternative to /users, does not return password and contains additional derived attributes
  See view schema at https://github.com/ericelizes1/Stack_AlphaCenturion/blob/main/database/stack_database.sql#:~:text=CREATE%20OR%20REPLACE,from%20users%3B
*/
router.get("/user_info", async (_, res) => {
  try {
    const results = await db.query("SELECT * FROM user_info;");
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

/*
  TODO: Add check-auth middleware
  Gets single user with user_id (WARNING: CONTAINS SENSITIVE INFO. USE /userinfo/:user_id API CALL IF POSSIBLE)
*/
router.get("/user/:user_id", async (req, res) => {
  console.log(req.params);
  try {
    const results = await db.query(`SELECT DISTINCT * FROM users WHERE user_id = ${req.params.user_id};`);
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows[0],
      }
    })
  } catch (err) {
    console.log(err);
  }
})

/*
  Safer alternative to /user/:user_id, does not return password and contains additional derived attributes
  See view schema at https://github.com/ericelizes1/Stack_AlphaCenturion/blob/main/database/stack_database.sql#:~:text=CREATE%20OR%20REPLACE,from%20users%3B
*/
router.get("/user_info/:user_id", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM user_info WHERE user_id = ${req.params.user_id};`);
    res.status(200).json({
      status: "Success",
      data: {
        data: results.rows[0],
      }
    })
  } catch (err) {
    console.log(err);
  }
})

// TODO: test :|
router.post("/register"), async (req, res) => {
  try {
    const newUser = await db.query(`
      INSERT INTO users VALUES (
        ${req.body.user_id},
        ${req.body.username},
        ${req.body.password},
        ${req.body.nickname},
        ${req.body.birthdate},
        ${req.body.first_name},
        ${req.body.last_name},
        ${req.body.email},
        ${req.body.phone},
        ${req.body.pronouns},
        ${req.body.bio},
        ${req.body.website},
        ${req.body.profile_img_url},
        ${req.body.created_on}
      )
    `)
    res.status(201).json({
      status: "Success",
      user: newUser
    })
  } catch (err) {
    console.log(err);
  }
}

router.get("/check_username/:username", async (req, res) => {
  try {
    const result = await db.query(`SELECT COUNT(*) FROM users WHERE username = '${req.params.username}'`);
    let count = result.rows[0].count;
    if (count == '1') {
      res.json({userExists: true})
    } else {
      res.json({userExists: false})
    }
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;