import mongoose from 'mongoose';

export interface tagDocument{
    name: string,
    postIds:string
};


const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uniqued: true
    },
    postIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'post'
    }
});

export const TagModel = mongoose.model<tagDocument>("tag", tagSchema);