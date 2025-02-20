import httpStatus from 'http-status';
import { JwtPayload } from "jsonwebtoken";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";
import User from "../user/user.model";
import AppError from "../../errors/AppError";
import QueryBuilder from '../../builder/QueryBuilder';

const createBlogIntoDB = async (payload: IBlog, user: JwtPayload) => {
    const { email, role } = user;
    const userData = await User.findOne({ email, role }).select('_id').lean();

    if (!userData?._id) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are Unauthorized')
    }

    const result = await Blog.create({ ...payload, author: userData?._id });
    return {
        title: result.title,
        content: result.content,
        author: result.author
    }
}

const updateBlogOfDB = async (id: string, payload: Partial<Pick<IBlog, 'title' | 'content'>>) => {
    const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'No Blog found to update!')
    }
    return result
}

const deleteBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'No Blog found to delete!')
    }
    return null
}

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
    const searchBlog = new QueryBuilder(Blog.find(), query).fields().filter().paginate().sortBy().search(['title', 'content']);
    const result = await searchBlog.modelQuery.populate('author');
    return result
}
const getSingleBlogFromDB = async (id: string) => {
    const result = await Blog.findById(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog not found!')
    }
    return result
}


export const BlogServices = {
    createBlogIntoDB,
    updateBlogOfDB,
    deleteBlogFromDB,
    getAllBlogsFromDB,
    getSingleBlogFromDB
}