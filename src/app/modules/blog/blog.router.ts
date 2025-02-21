import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogValidations } from "./blog.validation";
import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";
import checkIsTheCreatorOfBlog from "../../middlewares/checkIsTheCreatorOfBlog";

const router = Router();
router.post('', auth('user'), validateRequest(BlogValidations.createBlogValidation), BlogControllers.createBlog);
router.patch('/:id', auth('user'), checkIsTheCreatorOfBlog(), validateRequest(BlogValidations.updateBlogValidation), BlogControllers.updateBlog);
router.delete('/:id', auth('user'), checkIsTheCreatorOfBlog(), BlogControllers.deleteBlog);
router.get('', BlogControllers.getAllBlogsFromDB);
router.get('/:id', BlogControllers.getSingleBlogFromDB);

const BlogRoutes = router;
export default BlogRoutes