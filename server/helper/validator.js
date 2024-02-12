const Joi = require('joi');

const createVaidator = (data) => {
    const validatorSchema = Joi.object({
        roomcode: Joi.string().required().min(4).max(12),
        roomname: Joi.string().required().min(4).max(50),
        username: Joi.string().required().min(3)
    })
    return validatorSchema.validate(data);
}

const joinGameValidator = (data) => {
    const joinValidatorSchema = Joi.object({
        roomcode: Joi.string().required().min(4).max(12),
        username: Joi.string().required().min(3)
    })
    return joinValidatorSchema.validate(data);
}

module.exports = {
    createVaidator,
    joinGameValidator
}