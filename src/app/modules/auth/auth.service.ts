import config from "../../config";
import { IUser } from "../user/user.interface";
import User from "../user/user.model";
import bcrypt from 'bcrypt'
const registerUserIntoDB = async (payload: IUser) => {
    const encryptedPassword = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds));
    console.log(encryptedPassword);

    const result = await User.create({ ...payload, password: encryptedPassword });
    // return result
    return result
}

export const AuthServices = {
    registerUserIntoDB
}