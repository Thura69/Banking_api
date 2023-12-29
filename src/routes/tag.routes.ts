import { Express } from "express";
import { cookieValidator } from "../middlewares/cookieValidator";
import { getAllTagsController } from "../controller/tag.controller";

export function TagRoute(app: Express) {
    //get all routes
    app.get('/api/tags',cookieValidator,getAllTagsController)
}
