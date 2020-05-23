
exports.up = function(knex) {
    return knex.schema.createTable('atendimentos', function (table) {
        table.increments();
        table.string('servico').notNullable();
        table.decimal('value').notNullable();
  
        table.string('cliente_id').notNullable();
        table.foreign('cliente_id').references('id').inTable('clientes');
  
        table.string('empresa_id').notNullable();
        table.foreign('empresa_id').references('id').inTable('empresas');
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('atendimentos');
  };