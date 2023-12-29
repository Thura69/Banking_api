import { Session } from "inspector";
import { sessionModel } from "../models/session.model"

export async function createUserSession(obj:object){
    try {
        const session = await sessionModel.create(obj);
        return session;
    } catch (err: any) {
        throw new Error(err)
    }
}

export async function logoutUserSession(sessionId:string) {
    try {
        const session = await sessionModel.findOneAndUpdate(
            { sessionId: sessionId },
            { logoutTime: new Date() },
            { new: true },);
        return session;
    } catch (err: any) {
        throw new Error(err)
    }
}

export async function userWithSessionId(sessionId: string) {
    try {
        const session = await sessionModel.findOne({ sessionId }).select('-__V');
        return session;
    } catch (err: any) {
        throw new Error(err);
    }
}

export async function getAllSessionsServices() {
    try { 
        const sessions = await sessionModel.find().select('-__v');
        return sessions;
    } catch (err: any) {
        throw new err(err)
    }
}