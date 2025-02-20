import httpStatus from 'http-status';
import { model, Schema } from "mongoose";
import { CheckUserPayload, IReturningData, IUser, IUserCheckingOptions, IUserModel } from "./user.interface";
import { user_role } from "./user.constant";
import AppError from '../../errors/AppError';
import bcrypt from 'bcrypt'

const userSchema = new Schema<IUser, IUserModel>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: 0
    },
    role: {
        type: String,
        enum: [user_role.admin, user_role.user],
        default: user_role.user
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

userSchema.statics.checkingUser = async function (
    payload: CheckUserPayload,
    checkingOption: IUserCheckingOptions
) {
    const { checkIsUserExist, checkIsUserBlocked, plainTextPassword, giveUserData } = checkingOption;


    let returningData: IReturningData = {};

    const userData = await User.findOne(payload).select('+password');

    if (!userData) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }
    if (giveUserData) {
        returningData.userData = userData
    }
    if (checkIsUserExist) {
        returningData.isUserExist = !!userData;
    }
    if (checkIsUserBlocked) {
        returningData.isUserBlocked = userData.isBlocked
    }
    if (plainTextPassword) {
        const isPasswordMatched = await bcrypt.compare(plainTextPassword, userData.password);
        returningData.isPasswordMatched = isPasswordMatched;
    }

    return returningData;
};


const User = model<IUser, IUserModel>('User', userSchema);
export default User