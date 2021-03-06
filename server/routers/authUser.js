const express = require('express')
const checkJwt = require('../.././server/auth0')
const db = require('../db/authDB')

const router = express.Router()

// PUT /api/v1/users
router.put('/', checkJwt, async (req, res) => {
  const { userForm } = req.body
  const auth0Id = userForm.authOId
  const userToUpdate = {
    name: userForm.name,
    email: userForm.email,
    password: userForm.password,
  }
  try {
    const users = await db.updateUser(auth0Id, userToUpdate)
    res.json({ users })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res
        .status(403)
        .send('Unauthorized: only logged in users may update their data')
    }
    res.status(500).send(err.message)
  }
})

// POST /api/v1/users
router.post('/', checkJwt, async (req, res) => {
  const { auth0Id, name, email, password } = req.body
  const user = {
    auth0_id: auth0Id,
    name,
    email,
    password,
  }
  try {
    // check if user exists using new db function that takes auth id as param
    const userExists = await db.userExists(auth0Id)
    if (userExists) return res.sendStatus(200)
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

module.exports = router