import { Request, Response } from "express";
import { Iuser } from "../utils/types/user";
import { createUserSchema } from "../utils/joi/userJoi";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export async function createUser(request:Request, response: Response): Promise<void> {
    try {
        const params: Iuser = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            confirmPassword: request.body.confirmPassword
        };
        const {error: errorSchema, value: csvValid} = createUserSchema.validate(params);
        if(errorSchema){
            console.log(errorSchema.message);
            response.status(400).send(errorSchema.message);
            return;
        }

        if(csvValid.password != csvValid.confirmPassword){
            console.log("Senha nao confere");
            response.status(400).send("Senha nao confere");
            return;
        }

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(csvValid.password, salt);

        const user = new User({
            name: csvValid.name,
            email: csvValid.email,
            password: passwordHash
        });

        await user.save();

        response.status(200).send("User criado");
        return;
        
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
        return;
    }
}