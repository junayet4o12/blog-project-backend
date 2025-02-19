import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { UserValidations } from "../user/user.validation";

const router = Router();
router.post('/register', validateRequest(UserValidations.createUserValidationSchema), AuthControllers.registerUser)

const AuthRoutes = router;
export default AuthRoutes