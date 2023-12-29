import { object,string } from "zod";


export const userSchema = object({
    body: object({
        name: string({ required_error: 'Name is required' }),
        email: string({ required_error: 'Email is required' }),
        password: string({ required_error: 'Password is required' }),
        passwordComfirmation: string({ required_error: 'Password Comfirmation is required' })
        
    }).refine((data) => data.password === data.passwordComfirmation, {
        message: 'Password is not matched',
        path: ['passwordComfirmation']
    })
}); 

export const userLoginSchema = object({
    body: object({
        email: string({ required_error: "Email is required" }),
        password: string({ required_error: "Password is required" }),
        passwordComfirmation:string({required_error:"Password Comfirmation is required"})
    }).refine((data) => data.password === data.passwordComfirmation, {
        message: "Password is not matched",
        path:['passwordComfirmation']
    })
})