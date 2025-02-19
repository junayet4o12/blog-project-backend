import httpStatus from 'http-status';
import { JwtPayload } from "jsonwebtoken";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";
import User from "../user/user.model";
import AppError from "../../errors/AppError";

const createBlogIntoDB = async (payload: IBlog, user: JwtPayload) => {
    const { email, role } = user;
    const userData = await User.findOne({ email, role }).select('_id').lean();

    if (!userData?._id) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are Unauthorized')
    }

    const result = await Blog.create({ ...payload, author: userData?._id });
    return result
}

export const BlogServices = {
    createBlogIntoDB
}