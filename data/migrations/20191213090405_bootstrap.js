
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.string('name').notNullable();
        table.text('description');
        table.boolean('completed').notNullable().defaultTo(false);
  })
    .createTable('resources', table => {
        table.increments();
        table.string('name').notNullable();
        table.text('description')
  })
    .creatTable('tasks', table => {
        table.increments();
        table.text('description').notNullable();
        table.text('notes');
        table.boolean('completed').notNullable().defaultTo(false);
    })
};

exports.down = function(knex) {
  
};
