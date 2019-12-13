
exports.up = function(knex) {
  return knex.schema.createTable('', tale => {
      table.increments()
  });
};

exports.down = function(knex) {
  
};
