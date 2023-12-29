import { NextFunction, Request, Response } from 'express';
import { verifyJWT } from '../utils/jwt';


export const cookieValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(403).json({ con: false, msg: "You don't have access to Login", result: null })
        const { decoded, expired } = verifyJWT(token);
        
         if(expired)return res.status(403).json({con:false,msg:"Token expires",result:null})
        res.locals.user = decoded;
        next();
    } catch (error:any){
          return res.status(400).send(error.errors)
    }
}