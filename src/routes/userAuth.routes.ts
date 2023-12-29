import { Express } from 'express';
import { validateor } from '../middlewares/validator';
import { userLoginSchema, userSchema } from '../schema/user.schema';
import {userAuthLoginController, userAuthLogoutController, userAuthRegisterController } from '../controller/userAuth.controller';
import { cookieValidator } from '../middlewares/cookieValidator';

export function UserRoute(app: Express) {
    
    //user register
    app.post('/api/user/auth/register', validateor(userSchema), userAuthRegisterController);

    //user login
    app.post('/api/user/auth/login', validateor(userLoginSchema), userAuthLoginController);

    //user logout
    app.get('/api/user/auth/logout', cookieValidator, userAuthLogoutController)
    

}