import { Express } from "express";
import { HealthCheck } from "./routes/healthCheck.routes";
import { UserRoute } from "./routes/userAuth.routes";
import { CreatePostsRoute } from "./routes/createPost.routes";
import { SessionRoute } from "./routes/session.routes";
import { CategoryRoute } from "./routes/category.routes";
import { TagRoute } from "./routes/tag.routes";

export function routes(app: Express) {
    
    //healthCheck
    HealthCheck(app);

    //userAuth
    UserRoute(app);

    //sessions
    SessionRoute(app);

    //createPosts
    CreatePostsRoute(app);

    //category
    CategoryRoute(app);

    //tags
    TagRoute(app);
    
}