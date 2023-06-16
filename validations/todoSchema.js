const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const createTodoschema = Joi.object({
    content: Joi.string().min(5).required(),
});

const deleteToDoSchema = Joi.object({
    id: Joi.string().custom((value, helper) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return helper.error("any.invalid");
        }
        return value;
    }),
});

module.exports = {
    createTodoschema,
    deleteToDoSchema,
};
