const Joi = require('@hapi/joi');

function typeValidations(inputObj) {
    const schema = Joi.object().keys({
        employeeCode: Joi.string().required(),
        startingCashAmount: Joi.string().required(),
    });
    const validate = Joi.validate(inputObj, schema);
    return validate;
}

async function validateRequest(req, res, next) {
    try {
        const isValid = typeValidations(req.body);
        if (isValid.error) {
            res.status(422).json({
                error: isValid.error.message,
            });
            return;
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = exports = validateRequest;
