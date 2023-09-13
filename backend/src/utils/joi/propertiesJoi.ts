import Joi from "joi";

export const createPropertieSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro no name")),
    numRoom: Joi.number()
        .required()
        .error(new Error("Erro na quantidade de quartos")),
    numBathroom: Joi.number()
        .required()
        .error(new Error("Erro na quantidade de banheiros")),
    city: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro no cidade")),
})