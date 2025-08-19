import { z } from "zod"
import { PointSchema } from "./point";

export const AiOptionSchema = z.object({
    title : z.string(),
    isCorrect : z.boolean()
})

export const AiQuestionSchema = z.object({
    title : z.string(),
    options : z.array(AiOptionSchema), 
})

export const AiQuizSchema = z.object({
    topic : z.string(),
    questions : z.array(AiQuestionSchema)
})

export type AiQuiz = z.infer<typeof AiQuizSchema>;

export const OptionSchema = z.object({
    id : z.number().optional(),
    title : z.string(),
    isCorrect : z.boolean().optional(),
    questionId : z.number().optional()
})

export type Option = z.infer<typeof OptionSchema>

export const QuestionSchema = z.object({
    id : z.number().optional(),
    quizId : z.number().optional(),
    title : z.string(),
    options: z.array(OptionSchema),
    createdAt : z.date().optional(),
    expiresAt : z.date().optional()
})

export type Question = z.infer<typeof QuestionSchema>

export const QuizSchema = z.object({
    id : z.number().optional(),
    userId : z.number().optional(),
    code : z.string().length(6),
    topic : z.string(),
    status : z.enum(["DRAFT", "ACTIVE", "ENDED"]),
    questions : z.array(QuestionSchema),
    point : z.array(PointSchema).optional(),
    createdAt : z.date().optional(),
    expiresAt : z.date().optional()
})

export type Quiz = z.infer<typeof QuizSchema>