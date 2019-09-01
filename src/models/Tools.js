const mongoose = require('../database/index');

const ToolsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,  
    },
    link: {
        type: String,   
        required: true,  

    },
    description:{
        type: String,   
        required: true, 
    },
    tags:{
        type:[String],   
        required: false,    
    },

});

// ToolsSchema.plugin(mongoosePaginate);
mongoose.model('Tools',ToolsSchema);