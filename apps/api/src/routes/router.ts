import express from "express";
import { signup, signin } from "../controllers/userController.ts"
import { uploadBlog, updateBlog, getBlog } from "../controllers/blogController.ts"

const Router = express.Router();

Router.post('/signup', signup)
Router.post('/signin', signin)
Router.post('/blog', uploadBlog)
Router.put('/blog', updateBlog)
Router.get('/blog/:id', getBlog)

export default Router;
