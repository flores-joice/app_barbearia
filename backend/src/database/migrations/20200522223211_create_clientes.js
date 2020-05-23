
exports.up = function(knex) {
    return knex.schema.createTable('clientes', function (table) {
        table.increments();
        table.string('name_cliente').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();

        table.string('empresa_id').notNullable();
        table.foreign('empresa_id').references('id').inTable('empresas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};