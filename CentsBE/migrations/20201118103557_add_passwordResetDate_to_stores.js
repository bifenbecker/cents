exports.up = function (knex) {
    return knex.schema.table('stores', function (table) {
        table.timestamp('passwordResetDate');
    });
};

exports.down = function (knex) {
    return knex.schema.table('stores', function (table) {
        table.dropColumn('passwordResetDate');
    });
};
