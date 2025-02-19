import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogValidations } from "./blog.validation";
import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";

const router = Router();
router.post('',auth('user', 'admin'), validateRequest(BlogValidations.createBlogValidation), BlogControllers.createBlog)

const BlogRoutes = router;
export default BlogRoutes