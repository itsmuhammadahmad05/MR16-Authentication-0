import jwt from "jsonwebtoken";
import tokenModel from "../Model/Auth/token.js";

const authenticateMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;

    // if (!token) {
    //     return res.status(401).json({ message: "UnAuthorized2" });
    // }
    let checkToken = await tokenModel.findOne({
        where:{
            token
        },
    })
    if(!checkToken){
        return res.status(401).json({ message: "UnAuthorized1" });
    }

    console.log(checkToken,'checkToken')

    token = token.replace("Bearer ", " ");
    try {
        const decoded = jwt.verify(checkToken, JWT_SECRET_KEY);
        console.log(decoded, "req.body");
        req.user = decoded;
        next();
        
    } catch (error) {
        return res.status(401).json({ message: "UnAuthorized" });
    }
};

export default authenticateMiddleware;