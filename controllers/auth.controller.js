import User from '../model/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = async(userId) => {
    const accesstoken = jwt.sign(
        { userId },
        process.env.ACCESS_TOKEN,
        { expiresIn: '15m' }
    )
    return accesstoken;
}

const comparePassword = async(password1, password2) => {
    const isPassword = await bcrypt.compare(password1, password2);
    return isPassword;
}
///////////////////////////////////////////////////////////////////////////////////
export const signup = async(req, res) => {
    // res.send("signup page");
    const { email, password, name } = req.body;
    const userExists = await User.findOne({ email });
    
    if (userExists) return res.json("user already exits");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = await generateToken(user._id);

    res.status(201).json({user, token, message:"user created!"});
    
}
export const login = async(req, res) => {
    try{
        // res.send("login page")
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json("please enter email and password");

        const user = await User.findOne({ email });
        if (!user) return res.json("invalid email or password");

        const passwordMatch = await comparePassword(password, user.password);

        if (!passwordMatch) return res.json("password do not match!");
        const token = await generateToken(user._id);
        res.json({user, token,message:"login successful"});
    } catch (error) {
        console.log("error in login controller");
    }
}
export const logout = async(req, res) => {
    try {
        res.send("logged out!");
    } catch(error) {
        console.log("error in logout controller");
    }
}