import { Request,Response,NextFunction } from "express"
import { findUserByIdServices } from "../services/user.service";
import { getAllSessionsServices } from "../services/session.service";
import { Fmsg } from "../utils/Fmsg";

export async function getAllSessionController  (req:Request, res:Response, next:NextFunction) {
    try { 
      const userId = res.locals.user.sessionObject.userId;

        const isLegit = await findUserByIdServices(userId);
        if (!isLegit) return res.status(403).json({ con: false, msg: "User not found!", result: {} });

        const session = await getAllSessionsServices();

        return Fmsg(res, "All user sessions!", session);


    } catch (err: any) {
        return res.status(400).send(err.message)
    }
} 