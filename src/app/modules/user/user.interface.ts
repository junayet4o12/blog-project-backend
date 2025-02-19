import { user_role } from "./user.constant";

export type TUserRole = keyof typeof user_role

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: TUserRole;
    isBlocked: boolean;
}