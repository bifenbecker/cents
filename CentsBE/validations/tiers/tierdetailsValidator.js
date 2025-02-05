const Joi = require('@hapi/joi');
const PricingTier = require('../../models/pricingTier');

function typeValidations(inputObj) {
    const schema = Joi.object().keys({
        id: Joi.number().integer().required().min(1),
    });
    const validate = Joi.validate(inputObj, schema);
    return validate;
}
async function validateRequest(req, res, next) {
    try {
        const { id } = req.params;
        const isValid = typeValidations({ id });
        if (isValid.error) {
            res.status(422).json({
                error: isValid.error.message,
            });
            return;
        }
        const tier = await PricingTier.query().findById(id);
        if (!tier) {
            res.status(422).json({
                error: 'Invalid tier id',
            });
            return;
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = exports = validateRequest;
