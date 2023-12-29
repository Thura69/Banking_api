import { TagModel } from "../models/tag.model"

export async function findTagByNameService(name: string) {
    try {
        const tag = await TagModel.findOne({ name });
        return tag;
    } catch (e: any) {
        throw new Error(e) 
    }
} 

export async function addPostsToTagModelService(tagId:string,postId: string) {
    try {
        const update = await TagModel.updateOne({ _id: tagId }, {
            $push: { postIds: postId }
        });
        return update;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function createTagService(obj: object) {
    try {
        const tag = await TagModel.create(obj);
        return tag;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getAllTagsService() {
    try {
        const tags = await TagModel.find().populate('postIds');
        return tags;
    } catch (e: any) {
        throw new Error(e)
    }
}