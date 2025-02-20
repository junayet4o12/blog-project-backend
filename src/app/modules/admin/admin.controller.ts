import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync"
import sendResponse from '../../utils/sendResponse';
import { AdminServices } from './admin.service';

const blockUser = catchAsync(async (req, res) => {
    const result = await AdminServices.blockUser(req.params.id)
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "User blocked successfully", data: result })
})
const deleteBlog = catchAsync(async (req, res) => {
    const result = await AdminServices.deleteBlogFromDB(req.params.id)
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Blog deleted successfully", data: result })
})


export const AdminControllers = {
    blockUser,
    deleteBlog
}
