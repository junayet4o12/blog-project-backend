import httpStatus from 'http-status';
import AppError from "../../errors/AppError";
import Blog from "../blog/blog.model";
import User from "../user/user.model"

const blockUser = async (id: string) => {
    const result = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
    return result
}

const deleteBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'No Blog found to delete!')
    }
    return null
}

export const AdminServices = {
    blockUser,
    deleteBlogFromDB
}