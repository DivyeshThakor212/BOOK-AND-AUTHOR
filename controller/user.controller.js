const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user                                                                        
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new userModel({ email, password: hashedPassword });
        await user.save();

        // Create and send token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(201).json({ status: true, token, message: "User registered successfully" });
    } catch (err) {
        console.log(err, 'err');
       return res.status(500).json({ message: 'Server error' });
    }
}