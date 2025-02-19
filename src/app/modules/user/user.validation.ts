import { z } from "zod";
import { user_role } from "./user.constant";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
        }),
        email: z.string({
            required_error: "Email is required",
        }).email("Invalid email address"),
        password: z.string({
            required_error: "Password is required",
        }),
        role: z.enum([user_role.admin, user_role.user]).default(user_role.user),
        isBlocked: z.boolean().default(false),
    })
});
const updateUserValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email("Invalid email address").optional(),
        password: z.string().optional(),
        role: z.enum([user_role.admin, user_role.user]).optional(),
        isBlocked: z.boolean().optional(),
    })
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one field must be provided for update",
    }),
});

export const userValidations = {
    createUserValidationSchema,
    updateUserValidationSchema
}