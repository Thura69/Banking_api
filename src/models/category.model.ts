import mongoose from "mongoose";

export interface userInput{
    name:string
}

export interface categoryDocument extends userInput, mongoose.Document{
    postIds:string
};

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required: true
    },
    postIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'post'
    }
});

export const CategoryModel = mongoose.model<categoryDocument>('category',categorySchema)
