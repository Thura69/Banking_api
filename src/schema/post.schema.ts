import { array, object,string,z } from "zod";

export const postSchema = object({
    body: object({
        title: string({ required_error: "Title is required" }),
        content: array(z.string()),
        img: string({ required_error: "Image is required" }),
        category: string({ required_error: "Category is required" }),
        tags: array(z.string()),
        subTitle: array(z.string()),
        avTime:string({required_error:"Average Time To Read is required"})
    })
})