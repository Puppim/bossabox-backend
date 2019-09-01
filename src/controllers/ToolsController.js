const mongoose = require('../database/index');
const Tools = mongoose.model('Tools');


module.exports = {

    async show(req,res){
        if(req.query.tag){

            tools = await Tools.find({tags:{$in:`${req.query.tag}`}})
            return res.json(tools);

        }else{
            
            const tools = await Tools.find({});
            return res.json(tools);
            
        }

    },

    async store(req,res){

        const tools = await Tools.create(req.body);
        return res.json(tools);

    },

    async destroy(req,res){

        const tools = await Tools.findByIdAndDelete(req.params.id);
        return res.json({});

    }
};