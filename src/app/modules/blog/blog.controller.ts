import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const user = req.user;
    console.log(user);
    
    const result = await BlogServices.createBlogIntoDB(req.body, user);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Blog created successfully", data: result })
})

export const BlogControllers = {
    createBlog
}