import { Request, Response, NextFunction } from 'express'
import { Task } from '../entities/Task';

import log4js from 'log4js'
const logger = log4js.getLogger();
logger.level = "debug";

import * as TaskService from '../services/task.service';

export const getAllTaskByUserId = async (req: Request, res: Response, next: NextFunction) => {
  const  userId = req.header('userId')?.toString() 
  logger.info('getAllTaskByUserId')
  try {
    if (!userId){
      throw new Error('User is not authenticated')
    }

    const tasks = await TaskService.getAllTaskByUserId(parseInt(userId))
    res.status(200).send(tasks);
  }
  catch (ex: any) {
    logger.error(ex.message)
    if (ex.message == 'User is not authenticated') {
      res.status(401).send('User is not authenticated')
    }
  }
};


export const setTaskToDo = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('setTaskToDo')
  const { id:taskId } = req.params
  const  userId = req.header('userId')?.toString() 
  try {
    if (!userId){
      throw new Error('User is not authenticated')
    }

    await TaskService.setTaskToDo(parseInt(userId), parseInt(taskId))
    res.status(204).end();
  }
  catch (ex: any) {
    logger.error(ex.message)
    if (ex.message == 'User is not authenticated') {
      res.status(401).send('User is not authenticated')
    }
  }
};

export const setTaskInProgress = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('setTaskInProgress')
  const { id:taskId } = req.params
  const  userId = req.header('userId')?.toString() 
  try {
    if (!userId){
      throw new Error('User is not authenticated')
    }

    await TaskService.setTaskInProgress(parseInt(userId), parseInt(taskId))
    res.status(204).end();
  }
  catch (ex: any) {
    logger.error(ex.message)
    if (ex.message == 'User is not authenticated') {
      res.status(401).send('User is not authenticated')
    }
  }
};

export const setTaskDone = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('setTaskDone')
  const { id:taskId } = req.params
  const  userId = req.header('userId')?.toString() 
  try {
    if (!userId){
      throw new Error('User is not authenticated')
    }

    await TaskService.setTaskDone(parseInt(userId), parseInt(taskId))
    res.status(204).end();
  }
  catch (ex: any) {
    logger.error(ex.message)
    if (ex.message == 'User is not authenticated') {
      res.status(401).send('User is not authenticated')
    }
  }
};

export const setTaskArchived = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('setTaskArchived')
  const { id:taskId } = req.params
  const  userId = req.header('userId')?.toString() 
  try {
    if (!userId){
      throw new Error('User is not authenticated')
    }

    await TaskService.setTaskArchived(parseInt(userId), parseInt(taskId))
    res.status(204).end();
  }
  catch (ex: any) {
    logger.error(ex.message)
    if (ex.message == 'User is not authenticated') {
      res.status(401).send('User is not authenticated')
    }
  }
};


export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('createTask')
  const  userId = req.header('userId')?.toString() 
  const body= req.body
  try {
    if (!userId){
      throw new Error('User is not authenticated')
    }

    const newTask = {...body, userId} as Task

    await TaskService.createTask(newTask)

    res.status(201).end();
  }
  catch (ex: any) {
    logger.error(ex.message)
    if (ex.message == 'User is not authenticated') {
      res.status(401).send('User is not authenticated')
    }
    else {
      res.status(500).send(ex.message)
    }
  }
};
