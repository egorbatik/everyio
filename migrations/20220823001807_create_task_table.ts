import { Knex } from "knex";

const TASKS='tasks'

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(TASKS, (table)=>{
    table.increments('id').primary();
    table.bigInteger('userId').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('status').notNullable()
    table.unique(['userId', 'title']);
 
   
  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable(TASKS);
}

