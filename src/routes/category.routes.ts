import { Express } from "express";
import { cookieValidator } from "../middlewares/cookieValidator";
import { getAllCategories } from "../controller/category.controller";

export function CategoryRoute(app: Express) {
    //get all category
    app.get('/api/categories',cookieValidator,getAllCategories)
} 