import { Response,Request,NextFunction } from 'express';
import { getAllTagsService } from '../services/tags.service';
import { Fmsg } from '../utils/Fmsg';


export const getAllTagsController = async(req: Request, res:Response,next:NextFunction) =>{
    try {
        const tags = await getAllTagsService();

        return Fmsg(res, "All Tags", tags);

    } catch (e: any) {
        return res.status(500).send(e.message)
    }
}