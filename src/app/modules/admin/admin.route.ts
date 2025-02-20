import { Router } from "express";
import auth from "../../middlewares/auth";
import { AdminControllers } from "./admin.controller";

const router = Router();
router.patch('/users/:id/block', auth('admin'), AdminControllers.blockUser)
router.delete('/blogs/:id', auth('admin'), AdminControllers.deleteBlog)

const AdminRoutes = router;
export default AdminRoutes