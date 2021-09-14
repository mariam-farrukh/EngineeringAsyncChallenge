exports.up = function (knex) {
  return knex.schema.createTable("reservations", (reservations) => {
    reservations.increments();

    reservations
      .integer("user_id")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    reservations
      .integer("event_id")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("events")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations");
};
