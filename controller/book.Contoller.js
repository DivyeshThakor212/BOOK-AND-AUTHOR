const booksModel = require("../models/book.Model")

//Create
exports.createBook = async(req,res) => {
    try {
        const book = await booksModel.create(req.body)
        return res.status(200).send({
        succes:true,
        book
    })
}
catch (error) {
        console.log(error)
        return res.status(500).send({
        succes:false,
        message:"internal server error"
        })
    }
}

//Read 
exports.getBooks = async(req,res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit
    const genre = req.query.genre
    const sortBy = req.query.sortBy || "bookName"
    const orderBy = req.query.orderBy || "desc"

    try {

        const filter = {}
        const sort = {[sortBy]: orderBy}
        const totalBooks = await booksModel.countDocuments()
        const allbook = await booksModel.find(filter).skip(skip).limit(limit).sort(sort).populate("addedBy")
    return res.status(200).send({
        succes:true,
        allbook,totalBooks
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message:"internal server error "
            })
    }
}

//update

exports.updateBook = async(req,res) => {
    try {
        console.log(req.body,"bodydata")
        let oneBook = await booksModel.findById(req.params.id)
        console.log(oneBook,"onebook")

    if(!oneBook){
        return res.status(200).json({status: false, message:"Please provide correct id"})
    }

    oneBook = await booksModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        oneBook
      });
           
}
        
    catch (error) {
        console.log(error);
        return res.status(500).send({status: false, message: "data not found"})
    }
}

//Delete
exports.deleteBook = async (req, res) => {   
    let dltbook = await booksModel.findById(req.params.id);
  
    if(!dltbook){
        return res.status(200).json({status: false, message:"Please provide correct id"})
    }
  
    product = await booksModel.findByIdAndDelete(req.params.id);
  
    res.status(200).json({
      success: true,
      message: "Deleted Successfully"
    });
  };