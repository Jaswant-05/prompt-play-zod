import { z } from "zod";

export const PointSchema = z.object({
    id : z.number().optional(),
    userId : z.number().optional(),
    quizId : z.number().optional(),
    score : z.number()
});

export type Point = z.infer<typeof PointSchema>