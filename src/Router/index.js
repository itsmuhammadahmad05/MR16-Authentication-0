import { Router } from "express";
import authController from "../Controller/index.js";

const authRouter = Router();
authRouter.post("/signUp", authController.signUp);
authRouter.post("/signIn", authController.signIn);


export default authRouter;
