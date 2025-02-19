import { z } from "zod";

const createBlogValidation = z.object({
    body: z.object({
        title: z.string({ required_error: 'Title is required' }),
        content: z.string({ required_error: 'Content is required' }),
        isPublished: z.boolean().default(true),
    })
})
const updateBlogValidation = z.object({
    body: z.object({
        title: z.string().optional(),
        content: z.string().optional(),
        isPublished: z.boolean().optional(),
    })
        .partial()
        .refine((data) => Object.keys(data).length > 0, {
            message: "At least one field must be provided for update",
        }),
})

export const BlogValidations = {
    createBlogValidation,
    updateBlogValidation
}