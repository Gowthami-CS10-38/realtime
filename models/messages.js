const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    msg:{
        type: String,
    
    },
    conversations:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"

    }
},
{collection: "messages", timestamps:true})


module.exports = mongoose.model('Messages',msgSchema);