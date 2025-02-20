import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogValidations } from "./blog.validation";
import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";

const router = Router();
router.post('', auth('user'), validateRequest(BlogValidations.createBlogValidation), BlogControllers.createBlog);
router.patch('/:id', auth('user'), validateRequest(BlogValidations.updateBlogValidation), BlogControllers.updateBlog);
router.delete('/:id', auth('user'), BlogControllers.deleteBlog);
router.get('', BlogControllers.getAllBlogsFromDB);
router.get('/:id', BlogControllers.getSingleBlogFromDB);

const BlogRoutes = router;
export default BlogRoutes