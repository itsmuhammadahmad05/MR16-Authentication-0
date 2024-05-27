import userModel from "../Model/index.js";

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

    const user = await userModel.create({
        Name : payload.Name,
        Email : payload.Email,
        Password : payload.hashPassword
    });
    res.json({ message: "User registered successfully" });

    } catch (error) {
        console.log("Error is ",error)
    res.status(500).json({ message: "Internal server error", error });
    }
},

signIn: async (req, res) => {
    const payload = req.body;
    try {
    const catchUser = await userModel.findOne({
        where:{
            Email: payload.Email,
        },
    });

    if(!catchUser){
        return res.status(400).json({message: "Invalid Credentials"});
    }
    
    const comparePassword = await compare(payload.Password, catchUser.Password);

    if(!comparePassword){
        return res.status(500).json({message: "Invalid Credentials"});
    }

    const userData = {
        Name:catchUser.Name,
        Email:catchUser.Email,
        Password:catchUser.Password
    };

    const token = jwt.sign(userData,process.env.JWT_SECRET_KEY,{
        expiresIn: "1h",
    });
    res.json({message:"Data and Token", data, token });

    } catch (error) {
        console.log("Error is ",error)
    res.status(500).json({ message: "Internal server error", error });
    }
},

};
export default authController;
