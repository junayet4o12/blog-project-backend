import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const user = req.user;

    const result = await BlogServices.createBlogIntoDB(req.body, user);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Blog created successfully", data: result })
})

const updateBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.updateBlogOfDB(req.params.id, req.body);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Blog updated successfully", data: result })
})

const deleteBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.deleteBlogFromDB(req.params.id);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Blog deleted successfully", data: result })
})

export const BlogControllers = {
    createBlog,
    updateBlog,
    deleteBlog
}