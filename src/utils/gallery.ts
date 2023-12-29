import { Request,Response, NextFunction } from "express"

export function  savingSingleFile(req:Request,res:Response,next:NextFunction) {
    let filename: any = req.files?.file;
    if (filename) {
        let fileMove = filename.mv;
        filename = filename.name;
        filename = new Date().valueOf() + "_" + filename;
        fileMove(`./src/uploads/${filename}`);
        req.body['img'] = filename;
    }
    next();
}