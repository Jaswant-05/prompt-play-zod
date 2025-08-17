import  { z } from "zod";

export const UserSchema = z.object({
    username: z.email(),
    password: z.string()
        .min(8)  
        .regex(/[a-z]/, { message: "Add a lowercase letter" })
        .regex(/[A-Z]/, { message: "Add an uppercase letter" })
        .regex(/\d/, { message: "Add a number" })
        .regex(/[^A-Za-z0-9]/, { message: "Add a symbol" }),
    firstName: z.string().optional(),
    lastName: z.string().optional(), 
});

export type User = z.infer<typeof UserSchema>;


