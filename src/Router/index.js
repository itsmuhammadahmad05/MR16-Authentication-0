import { Router } from "express";
import authController from "../Controller/index.js";
import authenticateMiddleware from "../Middleware/authMiddleware.js";

const authRouter = Router();
authRouter.post("/signUp", authenticateMiddleware,authController.signUp);
authRouter.post("/signIn", authController.signIn);


export default authRouter;
