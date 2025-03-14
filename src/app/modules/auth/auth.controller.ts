import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import config from '../../config';

const registerUser = catchAsync(async (req, res) => {
    const result = await AuthServices.registerUserIntoDB(req.body);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "User registered successfully", data: result })
})
const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
    const { refreshToken } = result
    res.cookie('refreshToken', refreshToken, {
        secure: config.NODE_ENV === 'production',
        httpOnly: true
    })
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Login successful", data: result })
})



export const AuthControllers = {
    registerUser,
    loginUser
}