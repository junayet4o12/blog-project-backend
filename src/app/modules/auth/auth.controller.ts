import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
    const result = await AuthServices.registerUserIntoDB(req.body);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "User registered successfully!", data: result })
})

export const AuthControllers = {
     registerUser  
}