import  mongoose  from "mongoose"

export interface userInput{
    title: string,
    content: Array<string>,
    tags: Array<string>
    img: string,
    category: string,
    subTitle: Array<string>,
    avTime:string
    
}

export interface postDocument extends userInput, mongoose.Document{
    author: string,
    views: number,
    createdAt: Date,
    updatedAt: Date
}


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    content: {
        type: [String],
        default:[],
        required: true,
        uniqued: true
    },
    views: {
        type: Number,
        default:0
    },
    viewers: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'  
    },
    tags: {
        type: [String],
        default: [],
        require:true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required:true
    },
    subTitle: {
        type: [String],
        default:true
    },
    avTime: {
        type: String,
        require:true
    }
});

export const PostModel = mongoose.model<postDocument>("post", postSchema);