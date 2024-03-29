const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({

    authorName:{
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true        
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Author",authorSchema)