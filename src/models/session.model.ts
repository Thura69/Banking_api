import mongoose from "mongoose"

export interface userInput{
    sessionId: string,
    userName: string,
    createdAt: Date,
    logoutTime:Date
};

const SessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    logoutTime: {
        type: Date
    }
});


export const sessionModel = mongoose.model<userInput>("session", SessionSchema);