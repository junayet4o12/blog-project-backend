import { Model } from "mongoose";
import { user_role } from "./user.constant";

export type TUserRole = keyof typeof user_role

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: TUserRole;
    isBlocked: boolean;
}


export interface IUserCheckingOptions {
    checkIsUserExist?: boolean;
    checkIsUserBlocked?: boolean;
    plainTextPassword?: string;
    giveUserData?: boolean;
}
export interface IReturningData {
    isUserExist?: boolean;
    isUserBlocked?: boolean;
    isPasswordMatched?: boolean;
    userData?: IUser;
}

export type CheckUserPayload = Partial<Pick<IUser, 'email' | 'name' | 'role' | 'isBlocked'>>

export interface IUserModel extends Model<IUser> {
    checkingUser(payload: CheckUserPayload, checkingOptions: IUserCheckingOptions): Promise<IReturningData>;
    isJwtIssuedBeforePasswordChanged(passwordChangedTimestamp: Date, jwtIssuedTimeStamp: number): boolean;
}