const updateOrderDeliveryStatusPipeline = require('../../../pipeline/superAdmin/orderDelivery/updateOrderDeliveryStatusPipeline');

/**
 * Update the status of the OrderDelivery and update third party deliveries accordingly
 *
 * @param {Object} req
 * @param {Object} res
 * @param {void} next
 */
async function updateOrderDeliveryStatus(req, res, next) {
    try {
        const { orderDelivery } = req.constants;
        const payload = {
            status: req.body.status,
            orderDelivery,
        };

        await updateOrderDeliveryStatusPipeline(payload);

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = exports = updateOrderDeliveryStatus;
