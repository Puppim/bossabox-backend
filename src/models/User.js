const mongoose = require('../database/index');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,  
    },
    email:{
        type: String,
        unique: true,
        required: true,  
        lowercase: true,
    },
    password: {
        type: String,   
        required: true, 
        select: false, 
    },
    createAd:{
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash

    next()
})

mongoose.model('User',UserSchema);