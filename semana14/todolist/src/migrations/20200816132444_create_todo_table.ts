import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
      return knex.schema.createTableIfNotExists('todolist', (table) => {
            table.uuid('id').primary();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('status').notNullable().defaultTo('pending');
            table.date('deadline_date').notNullable();
            table.string('creator_user_id')
                  .notNullable()
                  .references('id')
                  .inTable('users');
      });
}

export async function down(knex: Knex): Promise<void> {
      return knex.schema.dropTable('todolist');
}
