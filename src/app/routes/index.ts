import { Router } from "express";
import AuthRoutes from "../modules/auth/auth.route";
import BlogRoutes from "../modules/blog/blog.router";
import AdminRoutes from "../modules/admin/admin.route";

const router = Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/blogs', route: BlogRoutes },
    { path: '/admin', route: AdminRoutes },

]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})
export default router;