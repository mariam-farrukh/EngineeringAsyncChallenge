exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();

    users.string("name", 120).notNullable();
    users.string("email").notNullable().unique();
    users.string("username", 255).notNullable().unique();
    users.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
