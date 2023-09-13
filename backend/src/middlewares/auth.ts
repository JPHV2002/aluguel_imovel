import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { secret } from "../environment";

export function authMiddleware(request:Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token){
            response.status(401).send("Acesso negado");
            return;
        }

        jwt.verify(token, secret);

        next()
    } catch (error) {
        console.log(error);
        response.status(401).send("Acesso negado");
        return;
    }
}