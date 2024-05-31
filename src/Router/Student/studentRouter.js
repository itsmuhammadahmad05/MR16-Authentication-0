import { Router } from "express";
import studentController from "../../Controller/Student/studentController.js";
import authenticateMiddleware from "../../Middleware/authMiddleware.js";

const studentRouter= Router();

// // Getting all students
studentRouter.get('/students',authenticateMiddleware, studentController.getAll);

// // Getting single students
studentRouter.get('/students/:id',studentController.getSingle);

//creating new student
studentRouter.post('/students', studentController.create);


export default studentRouter;