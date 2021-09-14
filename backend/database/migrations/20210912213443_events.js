exports.up = function (knex) {
  return knex.schema.createTable("events", (events) => {
    events.increments();

    events.string("event", 120).notNullable();
    events.string("startTime", 255).notNullable();
    events.string("endTime", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("events");
};
