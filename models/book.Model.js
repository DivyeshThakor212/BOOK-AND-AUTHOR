const mongoose  = require("mongoose") 

const bookSchema = new mongoose.Schema({

    bookName:{
        type: String,
        trim: true,
        required: true
    },
    genre:{
        type: String,
        enum: ["story","scifi","motivation","history","economics","politics"],
        required:true
    },
    description:{
        type: String,
        required: true
    },
    addedBy: {
        ref: "Author",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Book",bookSchema)