
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Rinse the car',
          notes: 'Use hose to rinse the car',
          completed: false,
          project_id: 1
        },
        {
          description: 'Brush the car',
          notes: 'Dip the brush in the bucket of soapy water, and brush the car',
          completed: false,
          project_id: 1
        },
        {
          description: 'Rinse the car',
          notes: 'Use the hose to rinse off all the soap from the car',
          completed: false,
          project_id: 1
        },
        {
          description: 'Use towel',
          notes: 'Use towel to dry car',
          completed: false,
          project_id: 1
        }
      ]);
    });
};
