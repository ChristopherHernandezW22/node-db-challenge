
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Wash car.",
          description: "use soap and water",
          completed: false
        },
      ]);
    });
};
