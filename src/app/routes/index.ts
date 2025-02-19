import { Router } from "express";
import AuthRoutes from "../modules/auth/auth.route";
import BlogRoutes from "../modules/blog/blog.router";

const router = Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/blogs', route: BlogRoutes },
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})
export default router;