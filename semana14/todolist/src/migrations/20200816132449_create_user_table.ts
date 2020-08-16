import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
      const defaultVarchar = 255;

      return knex.schema.createTableIfNotExists('users', (table) => {
            table.increments('id').primary();
            table.string('name', defaultVarchar).notNullable();
            table.string('nickname', defaultVarchar).notNullable().unique();
            table.string('email', defaultVarchar).unique();
      });
}

export async function down(knex: Knex): Promise<void> {
      return knex.schema.dropTable('users');
}
