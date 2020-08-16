import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
      return knex.schema.createTable('todolist', (table) => {
            table.uuid('id').primary();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('status').notNullable().defaultTo('pending');
            table.date('deadline_date').notNullable();
            table.string('creator_user_id')
                  .references('id')
                  .inTable('users')
                  .notNullable();
      });
}

export async function down(knex: Knex): Promise<void> {
      return knex.schema.dropTable('todolist');
}
