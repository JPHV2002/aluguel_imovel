import { Request, Response } from "express";
import { Ipropertie } from "../utils/types/properties";
import { createPropertieSchema } from "../utils/joi/propertiesJoi";
import { Properties } from "../models/Properties";
import jwt from "jsonwebtoken";

export async function createProperties(request:Request, response: Response) {
    try {
        const params: Ipropertie = {
            city: request.body.city,
            name: request.body.name,
            numBathroom: request.body.numBathroom,
            numRoom: request.body.numRoom,
        };

        const {error: errorSchema, value: csvValid} = createPropertieSchema.validate(params);
        if(errorSchema){
            console.log(errorSchema.message);
            response.status(400).send(errorSchema.message);
            return;
        }

        const token = request.headers["authorization"]?.split(" ")[1]
        if(token){
            const ownerId:any = jwt.decode(token);
            new Properties({
                ownerId: ownerId["id"],
                name: params.name,
                city: params.city,
                numBathroom: params.numBathroom,
                numRoom: params.numRoom
            }).save();

            response.status(200).send("Propriedade criado");
            return;
        }
        response.status(400).send("error")
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
        return;
    }
}

export async function listProperties(request:Request, response: Response) {
    try {
        const properties = await Properties.find();
        response.status(200).send(properties)
        return;
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
        return;
    }
}

export async function getPropertie(request:Request, response: Response) {
    try {
        const id = request.params.id;
        if(!id){
            response.status(400).send("id nao veio");
            return;
        }
        const propertie = await Properties.findOne({_id: id});
        response.status(200).send(propertie)
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
        return;
    }
}

export async function deletePropertie(request:Request, response: Response) {
    try {
        const id = request.params.id;
        if(!id){
            response.status(400).send("id nao veio");
            return;
        }
        await Properties.deleteOne({_id: id});
        response.status(200).send(`${id} documento deletado`)
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
        return;
    }
}