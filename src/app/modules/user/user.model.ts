import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import { user_role } from "./user.constant";

const userSchema = new Schema<IUser>({
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

const User = model<IUser>('User', userSchema);
export default User