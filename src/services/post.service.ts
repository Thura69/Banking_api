import { object } from 'zod';
import { PostModel, userInput } from '../models/post.model';

export async function createPostService(object:userInput) {
    try { 
        const post = (await PostModel.create(object));
        return post;
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllPostsService() {
    try {
        const post = await PostModel.find().populate('author');
        return post;
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getByIdPostService(postid:string) {
    try {
        const post = await PostModel.findById(postid).populate(['author','viewers']).select('-__v');
        return post
    } catch (e: any) {
        throw new Error(e)
    }
};

export async function addViewPostService(postId:string) {
    try {
        const done = await PostModel.findByIdAndUpdate(postId, {
            $inc: { views: 1 }
        });
        return done;
    } catch (e: any) {
        throw new Error(e)
    }
};

export async function viewersToPostService(userId: string,postId:string) {
    try {
        const done = await PostModel.findByIdAndUpdate(postId, {
            $addToSet: { viewers: userId }
        });
        return done;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getByTagPostService(tagsArray: [string]) {
    try {
        const done = await PostModel.find({ tags: { $in: tagsArray } }).limit(20);

        return done;
    } catch (e: any) {
        throw new Error(e);
    }
};

export async function getLatestFivePostsService() {
    try {
        const posts = await PostModel.find()
            .sort({ createdTime: -1 })
            .limit(5)
            .exec();
        
        return posts;
    } catch (e: any) {
        throw new Error(e);
    }
}