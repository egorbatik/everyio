
import { Task } from '../entities/Task';
import * as TaskRepository from '../repositories/task.repository';

export const getAllTaskByUserId = async (userId: number) => TaskRepository.getAllTasksByUserId(userId)

export const setTaskToDo = async (userId: number, taskId: number) => TaskRepository.setTaskToDo(userId, taskId)

export const setTaskInProgress = async (userId: number, taskId: number)  => TaskRepository.setTaskInProgress(userId, taskId)

export const setTaskDone = async (userId: number, taskId: number)  => TaskRepository.setTaskDone(userId, taskId)

export const setTaskArchived = async (userId: number, taskId: number) => TaskRepository.setTaskArchived(userId, taskId)

export const createTask = async (newTask: Task) => TaskRepository.insertTask(newTask)

