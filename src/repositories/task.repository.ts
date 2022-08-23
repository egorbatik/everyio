
import { db } from "../db/dbUtils";
import { Task } from "../entities/Task";
  
export const getAllTasksByUserId = async (id:number) => 
  db()
    .table('tasks') 
    .where({userId: id}) 

export const setTaskToDo = async (id:number, taskId: number) =>  
  db()
    .table('tasks') 
    .update({status: 'ToDo'})
    .where({userId: id}) 
    .andWhere({id: taskId})

export const setTaskInProgress = async (id:number, taskId: number) =>  
  db()
    .table('tasks') 
    .update({status: 'InProgress'})
    .where({userId: id}) 
    .andWhere({id: taskId})

export const setTaskDone = async (id:number, taskId: number) =>  
  db()
    .table('tasks') 
    .update({status: 'Done'})
    .where({userId: id}) 
    .andWhere({id: taskId})

export const setTaskArchived = async (id:number, taskId: number) =>  
  db()
    .table('tasks') 
    .update({status: 'archived'})
    .where({userId: id}) 
    .andWhere({id: taskId})

export const insertTask = async (newTask:Task) =>  
  db()
    .table('tasks') 
    .insert({...newTask})