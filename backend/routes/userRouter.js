import express from 'express'
import { registerUser, loginUser } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);

//import verifyToken from './middleware/authMiddleware.js'; 
//userRouter.post("/register", verifyToken,registerUser);

 export default userRouter; 