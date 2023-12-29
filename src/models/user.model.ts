import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';


export interface UserInput{
    name: string,
    email: string,
    password: string,
    img:string
}

export interface UserDocument extends UserInput, mongoose.Document{
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }

});

userSchema.pre('save', async function (next) {
    let user = this as UserDocument


    if (!user.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltRound'));
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<Boolean>{
    let user = this as UserDocument;

    return  bcrypt.compare(candidatePassword, user.password);
}


export const UserModel = mongoose.model<UserDocument>("user", userSchema);


