import Joi from "joi";

export const createUserSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro no nome")),
    email: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro no email")),
    password: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro na senha")),
    confirmPassword: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro na confirmacao de senha")),
})

export const loginUserSchema = Joi.object({
    email: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro no email")),
    password: Joi.string()
        .required()
        .min(3)
        .max(30)
        .trim(true)
        .error(new Error("Erro na senha")),
})