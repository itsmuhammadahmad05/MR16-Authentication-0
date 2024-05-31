import sequelize from "./config.js"
import userModel from "../Model/index.js";
import studentModel from "../Model/Student/studentModel.js";
import tokenModel from "../Model/Auth/token.js";


const syncDB = async ()=>{
    await sequelize.sync({ alter: true, force: false });
    await userModel.sync({ alter: true, force: false });
    await studentModel.sync({ alter: true, force: false });
    await tokenModel.sync({ alter: true, force: false });

}


export default syncDB;

