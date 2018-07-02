
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items',function(t){
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.decimal('price', 6, 2).notNull();
    t.integer('slab').notNull();
    t.decimal('sum', 6, 2);
    t.decimal('total', 6, 2);
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};
