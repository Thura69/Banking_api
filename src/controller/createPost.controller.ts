import { Request, Response, NextFunction } from "express";
import {  findUserByIdServices } from "../services/user.service";
import { addViewPostService, createPostService, getAllPostsService, getByIdPostService,  getByTagPostService,  getLatestFivePostsService,  viewersToPostService } from "../services/post.service";
import { Fmsg } from "../utils/Fmsg";
import { addCategoryService, addMorePostsIdService, findCategoryByNameService } from "../services/category.service";
import { addPostsToTagModelService, createTagService } from "../services/tags.service";

export const createPostController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userId = res.locals.user.sessionObject.userId;

        const isLegit = await findUserByIdServices(userId);
        if (!isLegit) return res.status(403).json({ con: false, msg: "User not found!", result: {} });

        req.body['author'] = isLegit._id;

        const createPost = await createPostService(req.body);

        const isCategory = await findCategoryByNameService(req.body.category);

        if (isCategory) await addMorePostsIdService(isCategory._id, createPost.id);
         
        if (!isCategory) await addCategoryService(
            {
                name: req.body.category,
                postIds: [createPost._id]
            }
        );

        const tagsArray = req.body.tags;

        for (let i = 0; i < tagsArray.length; i++){
            const tag = tagsArray[i];

            try {
                const isTag = await findCategoryByNameService(tag);
                
                if (isTag) await addPostsToTagModelService(isTag._id, createPost._id);
                if (!isTag) await createTagService(
            {
                name: tag,
                postIds: [createPost._id]
            }
        );


            } catch (err:any) {
            return res.status(500).json({ error: 'An error occurred' });
            }
        }


       return  Fmsg(res, "Successfully posted!", createPost);


    } catch (e:any) {
        res.status(400).send(e.message)
}
}

export const getAllPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
         const userId = res.locals.user.sessionObject.userId;

        const isLegit = await findUserByIdServices(userId);
        if (!isLegit) return res.status(403).json({ con: false, msg: "User not found!", result: {} });

        const posts = await getAllPostsService();

        return Fmsg(res, 'All Posts', posts);


    } catch (e: any) {
        return res.status(400).send(e.message)
    }
}

export const getSinglePostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = res.locals.user.sessionObject.userId;

        const isLegit = await findUserByIdServices(userId);
        if (!isLegit) return res.status(403).json({ con: false, msg: "User not found!", result: {} });

        await addViewPostService(req.params.id);
        await viewersToPostService(userId,req.params.id)
        const post = await getByIdPostService(req.params.id);
        if (!post) return res.status(404).json({ con: false, msg: "Post not found!", result: {} });


        return Fmsg(res,"Single post",post);

    } catch (e: any) {
        return res.status(400).send(e.message)
    }
}

export const getPostByTagController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = res.locals.user.sessionObject.userId;

        const isLegit = await findUserByIdServices(userId);
        if (!isLegit) return res.status(403).json({ con: false, msg: "User not found!", result: {} });
        const tags:any = req.query.tags;
        const tagsArray = tags?.split(',');

        const videos = await getByTagPostService(tagsArray);

        return Fmsg(res, "Post by tag", videos);

    } catch (e:any) {
        return res.status(500).send(e.message)
    }
}

export const getLatestFivePostsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = res.locals.user.sessionObject.userId;
        const isLegit = await findUserByIdServices(userId);
        if (!isLegit) return res.status(403).json({ con: false, msg: "User not found!", result: {} });

        const posts = await getLatestFivePostsService();

        return Fmsg(res, "Latest posts", posts);
    } catch (e: any) {
        return res.status(500).send(e.message)
    }
}

