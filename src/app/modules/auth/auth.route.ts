import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { UserValidations } from "../user/user.validation";
import { AuthValidations } from "./auth.validation";

const router = Router();
router.post('/register', validateRequest(UserValidations.createUserValidationSchema), AuthControllers.registerUser)
router.post('/login', validateRequest(AuthValidations.loginUserValidationSchema), AuthControllers.loginUser)

const AuthRoutes = router;
export default AuthRoutes