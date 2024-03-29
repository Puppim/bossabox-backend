const express = require('express')
const mongoose = require('../database/index');
const router = express.Router()
const User = mongoose.model('User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function generateToken(params = {}){
    return jwt.sign(params,process.env.JWT_SECRET, {
        expiresIn: 86400 
    })
}

router.post('/register', async (req,res)=>{
    const { email } = req.body

    try{

        if( await User.findOne({ email }))
            return res.status(400).send({erro: 'User already exists'})
        

        const user = await User.create(req.body)

        user.password = undefined

    return res.send({user, token: generateToken({ id: user.id}) })
    }catch(err){
        return res.status(400).send({erro: 'Registration failed'})
    }
})

router.post('/authenticate', async (req, res)=>{
    const{ email, password} = req.body

    const user = await User.findOne({email}).select('+password')

    if(!user)
        return res.status(400).send({erro: 'User not found'})
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({erro: 'Invalid password'})

    user.password = undefined

    res.send({user ,  token: generateToken({ id: user.id})})
} )

module.exports = app => app.use('/auth', router)