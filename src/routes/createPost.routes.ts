import { Express } from "express";
import { validateor } from "../middlewares/validator";
import { postSchema } from "../schema/post.schema";
import { createPostController, getAllPostController, getLatestFivePostsController, getPostByTagController, getSinglePostController } from "../controller/createPost.controller";
import { cookieValidator } from "../middlewares/cookieValidator";
import { savingSingleFile } from "../utils/gallery";

export function CreatePostsRoute(app: Express) {
    //create posts
    app.post('/api/users/createposts', cookieValidator,savingSingleFile,validateor(postSchema),createPostController);
    
    //get all posts
    app.get('/api/users/posts', cookieValidator, getAllPostController);

    //get single posts
    app.get('/api/users/posts/:id', cookieValidator, getSinglePostController);

    //get post by tag
    app.get('/api/users/posts/tags/bytags', cookieValidator, getPostByTagController);

    //get latest 5 posts
    app.get('/api/users/posts/latest/five', cookieValidator, getLatestFivePostsController);

   
}