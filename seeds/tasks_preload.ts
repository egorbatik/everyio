import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tasks").del();

    // Inserts seed entries
    await knex("tasks").insert([
        { userId: 1, title: 'First Task', description: 'First Description', status: 'ToDo'},
        { userId: 1, title: 'Second Task', description: 'Second Description', status: 'InProgress'},
        {  userId: 1, title: '3d Task', description: '3d Description', status: 'Done'},
        {  userId: 1, title: '4d Task', description: '4d Description', status: 'archived'},
        {  userId: 2, title: 'First Task User 2', description: 'First Task User 2', status: 'ToDo'},
        
    ]);
};


