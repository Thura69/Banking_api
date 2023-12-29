import { AnyZodObject } from "zod"
import { Request,Response,NextFunction } from "express"

export const validateor = (schmea: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schmea.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        next();
    } catch (error: any) {
        return res.status(400).send(error.errors)
    }
};