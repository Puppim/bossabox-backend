const express = require('express')
const autMiddleware = require('../middlewares/auth')

const router = express.Router()

router.use(autMiddleware)

router.get('/',(req,res)=>{
    res.send({ok: true, user: req.userId})
})

module.exports = app=> app.use('/projects',router)