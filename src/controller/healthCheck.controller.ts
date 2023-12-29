import { NextFunction,Request,Response } from 'express'

const HealthCheckController = async (req:Request,res:Response,next:NextFunction) => {
 return res.status(200).send("Hello this is healthy")
}

export default HealthCheckController