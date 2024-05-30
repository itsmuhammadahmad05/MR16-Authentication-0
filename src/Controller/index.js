import userModel from "../Model/index.js";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import tokenModel from "../Model/Auth/token.js";

const authController = {
signUp: async (req, res) => {

    const payload = req.body;
    try {
    const catchUser = await userModel.findOne({
        where:{
            Email: payload.Email,
        },
    });
    if(catchUser){
        return res.status(400).json({message: "User already exists"});
    }
    
    const hashPassword = await hash(payload.Password, 10);

    await userModel.create({
        Name : payload.Name,
        Email : payload.Email,
        Password : hashPassword
    });
    res.json({ message: "User registered successfully" });

    } catch (error) {
        console.log("Error is ",error)
        res.status(500).json({ message: "Internal server error", error });
    }
},

signIn: async (req, res) => {
    const {Email, Password} = req.body;
    try {
    let user = await userModel.findOne({
        where:{
            Email: Email
        },
    });
    if(!user){
        return res.status(400).json({message: "Invalid Credentials"});
    }
    
    user = user.toJSON();
    const comparePassword = await compare(Password, user.Password);
    if(!comparePassword){
        return res.status(500).json({message: "Invalid Credentials"});
    }
    // const userData = {
    //     Name:catchUser.Name,
    //     Email:catchUser.Email
    // };

    delete user.Password;

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY,{
        expiresIn: "1h",
    });
    await tokenModel.create({
        token,
    })
    
    res.json({Data:user, token });
    } catch (error) {
        console.log("Error",error)
        res.status(500).json({ message: "Internal server error", error });
    }
},

};
export default authController;
