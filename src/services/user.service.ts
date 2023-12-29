import { UserInput, UserModel } from "../models/user.model";


export async function createUser(input:UserInput) {
    try { 
        const user = await UserModel.create(input);
        return user;
    } catch (err:any) {
        throw new Error(err)
    }
};

export async function findUser(email:object) {
    try {
        const user = await UserModel.findOne(email);
        return user;
    } catch (err: any) {
        throw new Error(err)
    }
}

export async function findUserByIdServices(id: string) {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (err: any) {
        throw new Error(err)
    }
}