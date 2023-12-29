import { Express } from "express";
import { cookieValidator } from "../middlewares/cookieValidator";
import { getAllSessionController } from "../controller/session.controller";

export function SessionRoute(app: Express) {
    //getAllSession
    app.get("/api/users/sessions",cookieValidator,getAllSessionController)
}