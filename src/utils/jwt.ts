import jwt from 'jsonwebtoken';
import config from 'config';

const privateKey = config.get<string>('privateKey')

export function signJWT(obj: Object, options?: jwt.SignOptions | undefined) {
return jwt.sign(obj,privateKey,options)
}

export function verifyJWT(token: string) {
   try{
        const decoded = jwt.verify(token, privateKey);        
        return {
            valid: false,
            expired: false,
            decoded:decoded
        }
    } catch (e: any) {
        
        return {
            valid: false,
            expired: true,
            decoded: null
        }
    }
}