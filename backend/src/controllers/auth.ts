import { Request, Response } from "express";
import { IloginUser, Iuser } from "../utils/types/user";
import { createUserSchema, loginUserSchema } from "../utils/joi/userJoi";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import { secret } from "../environment";

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

        const userExists = await User.findOne({email: csvValid.email});

        if(userExists){
            response.status(400).send("User ja existe");
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

export async function loginUser(request:Request, response: Response): Promise<void> {
    try {
        const params: IloginUser = {
            email: request.body.email,
            password: request.body.password,
        };
        const {error: errorSchema, value: csvValid} = loginUserSchema.validate(params);
        if(errorSchema){
            console.log(errorSchema.message);
            response.status(400).send(errorSchema.message);
            return;
        }

        const user = await User.findOne({email: csvValid.email});

        if(!user){
            response.status(400).send("User nao existe");
            return;
        }
        if(user.password){
            const checkPassword = await bcrypt.compare(csvValid.password, user.password);
            if(!checkPassword){
                response.status(400).send("Senha errada");
                return;
            }

            const token = jwt.sign({
                id: user._id
            }, secret);

            response.status(200).send({msg: "usuario logado", token: token})
        }


    } catch (error) {
        console.log(error);
        response.status(500).send(error);
        return;
    }
}