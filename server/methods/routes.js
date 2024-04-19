const express = require('express')
const check = require('./check')
const methods = require('./route-methods')
const router = express.Router()

router.get('/users', async (req, res) => {
    const users = await methods.getUsers()
    try {
        res.status(200).json(users)
    } catch {
        res.status(500).json({message: 'server failed getting users'})
    }
})
router.post('/register', check, async (req, res) => {
    const {username, password} = req.body
    const newUser = methods.register({username, password})
 try {
    res.status(201).json(newUser)
 } catch {
    res.status(500).json({message: 'server failed to create new user'})
 }
})

router.post('/login', check, async (req, res) => {
    const {username, password} = req.body
    const login = methods.login({username, password})
    try {
        res.status(201).json(login)
    } catch {
        res.status(500).json({message: 'server couldnt log you in, pelase try again'})
    }
})



module.exports = router