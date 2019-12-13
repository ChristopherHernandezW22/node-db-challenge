
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
            tbl.integer('project_id', 6)
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
};
