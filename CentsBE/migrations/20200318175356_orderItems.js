exports.up = function (knex) {
    return knex.schema.createTable('orderItems', function (table) {
        table.increments('id');
        table.integer('orderId').notNullable();
        table.foreign('orderId').references('id').inTable('orders');
        table.string('status');
        table.float('price', 6, 2);
        table.integer('serviceId');
        table.foreign('serviceId').references('id').inTable('services');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('orderItems');
};
