import httpStatus from 'http-status';
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import User from "../modules/user/user.model";
import AppError from '../errors/AppError';
import Blog from '../modules/blog/blog.model';

const checkIsTheCreatorOfBlog = () => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { role, email } = req.user;
        const userData = await User.findOne({ email, role }).select('_id').lean();

        if (!userData?._id) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are Unauthorized')
        }
        const id = req.params.id;
        const BlogAuthorId = await Blog.findById(id).select('author').lean();

        if (!BlogAuthorId?._id) {
            throw new AppError(httpStatus.NOT_FOUND, 'Blog Not Found')
        }

        if (BlogAuthorId?.author.toString() !== userData?._id.toString()) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are Unauthorized')
        }


        next()
    })
}

export default checkIsTheCreatorOfBlog;