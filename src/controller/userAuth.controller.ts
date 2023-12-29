import { NextFunction,Request,Response } from "express";
import { createUser, findUser } from "../services/user.service";
import { comparePassword } from "../utils/comparePassword";
import config from 'config';
import { signJWT } from "../utils/jwt";
import { createUserSession, logoutUserSession, userWithSessionId } from "../services/session.service";
import { Fmsg } from "../utils/Fmsg";


export const userAuthRegisterController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (e: any) {
        res.status(400).send(e.message);
    }
};

const oneHourInSeconds = 60 * 60;

export const userAuthLoginController = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const isUser = await findUser({ email: req.body.email });
        if (!isUser) return res.status(404).send("Email not found");
        
        const isLegit = await comparePassword(req.body.password, isUser.password);

        if (!isLegit) return res.status(403).send("Password is wrong");

        (req.session as any).user = {
            username: isUser.name
        };

        const sessionObject = {
            sessionId: req.session.id,
            userName: (req.session as any).user.username
        }
   
        await createUserSession(sessionObject);
         
        sessionObject['email'] = isUser.email;
        sessionObject['userId'] = isUser._id;
        
        const accessToken = signJWT({sessionObject}, {
            expiresIn: config.get<string>('refreshTokenTtl')
        });

       
        Fmsg(res, "Login Successful", { token: accessToken });


    } catch (e: any) {
        res.status(400).send(e.message);
    }
};

export const userAuthLogoutController = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const user = res.locals.user;
        const isSession = await userWithSessionId(user?.sessionObject.sessionId);
        
        if (!isSession) return res.status(404).json({ status: false, msg: "Session not found!", result: null })
        

        //update session logout time 
        await logoutUserSession(isSession.sessionId);

        return Fmsg(res,"Logout successful!",{})

 
    } catch (e: any) {
        res.status(400).send(e.message)
    }
}

