const { table } = require("console");

exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNull()
    })
    .createTable("users", tbl => {
        tbl.increments();
        tbl.string("username", 128).notNull().index();
        tbl.string("password", 256).notNull();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
