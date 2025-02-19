import httpStatus from 'http-status';
import config from "../../config";
import AppError from "../../errors/AppError";
import { IReturningData, IUser, IUserCheckingOptions, TUserRole } from "../user/user.interface";
import User from "../user/user.model";
import bcrypt from 'bcrypt'
import { createToken } from './auth.utils';
import { SignOptions } from 'jsonwebtoken';
const registerUserIntoDB = async (payload: IUser) => {
    const encryptedPassword = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds));
    const result = await User.create({ ...payload, password: encryptedPassword });
    return {
        _id: result._id,
        name: result.name,
        email: result.email
    }
}

const loginUser = async (payload: Pick<IUser, 'email' | 'password'>) => {
    const checkingOption: IUserCheckingOptions = {
        checkIsUserExist: true,
        checkIsUserBlocked: true,
        plainTextPassword: payload.password,
        giveUserData: true
    };
    const data = await User.checkingUser({ email: payload.email }, checkingOption);
    const { userData, isUserBlocked, isUserExist, isPasswordMatched } = data

    if (!isUserExist) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials')
    }
    if (isUserBlocked) {
        throw new AppError(httpStatus.NOT_FOUND, 'User has blocked')
    }
    if (!isPasswordMatched) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials')
    }

    const jwtPayload = {
        userId: userData?.email as string,
        role: userData?.role as TUserRole
    }
    const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expires_in as SignOptions["expiresIn"])
    const refreshToken = createToken(jwtPayload, config.jwt_refresh_secret as string, config.jwt_refresh_expires_in as SignOptions["expiresIn"])

    return {
        accessToken,
        refreshToken
    }

}

export const AuthServices = {
    registerUserIntoDB,
    loginUser
}