import { Request, Response, NextFunction } from "express";
import { getAllCategoriesService } from "../services/category.service";
import { Fmsg } from "../utils/Fmsg";


export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
      try {
          const categories = await getAllCategoriesService();

          return Fmsg(res, "All Categories", categories);
    } catch (e:any) {
        return res.status(400).send(e.message)
    }
}