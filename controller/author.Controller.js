const authorModel = require("../models/author.Model")
const jwt = require('jsonwebtoken')

exports.createAuthor = async(req,res) => {
    try {
        const author = await authorModel.create(req.body)
    return res.status(200).send({
        succes:true,
        author
    })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            succes:false,
            message:"internal server Error"
        })
    }
}

/*exports.authAuthentication = async (req, res, next) => {
    try {
        const author = await  authorModel.findOne({ authorName: req.body.authorName})
        if(!author) return next(createError(404,"author not found")) 

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            author.password
        );
        if (!isPasswordCorrect) 
        return next(createError(400, "Wrong password or Username!"))   
        
        const token = jwt.sign(
            { id: author._id, isAdmin: author.isAdmin },
            process.env.JWT
          ); 

          const { password, isAdmin, ...otherDetails } = author._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true                                                                              
      })
      .status(200)
      .json({ ...otherDetails });

    } catch (error) {
        next(error);
    }
} */



exports.getAllauthors = async (req, res) => {
    try {
        const authorall = await authorModel.find()
        return res.status(200).send({ status: true,authorall })
    } catch (error) {
        return res.status(500).send({ status: false, message: "Internal Server Error" })
    }
}