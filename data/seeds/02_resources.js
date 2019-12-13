
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "Bucket of soapy water",
          description: "For cleaning car"
        },
        {
          name: "Hose",
          description: "To rinse car"
        },
        {
          name: "Brush",
          description: "Brushes car with soap"
        },
        {
          name: "Towel",
          description: "To dry car"
        }
      ]);
    });
};
