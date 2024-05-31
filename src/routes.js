import authRouter from "./Router/index.js";
import studentRouter from "./Router/Student/studentRouter.js";

const allRoutes = [
    authRouter,
    studentRouter
]

export default allRoutes;