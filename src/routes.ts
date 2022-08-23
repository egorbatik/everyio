import { Router }  from 'express'
import { json } from 'body-parser';

import * as TaskController from './controllers/task.controller'

const router = Router()


router.get('/', (req, res) => {
  res.send('Hello world');
})

router.get('/tasks', TaskController.getAllTaskByUserId)

router.post('/tasks/:id(\\d+)/ToDo', TaskController.setTaskToDo)

router.post('/tasks/:id(\\d+)/InProgress', TaskController.setTaskInProgress)

router.post('/tasks/:id(\\d+)/Done', TaskController.setTaskDone)

router.delete('/tasks/:id(\\d+)', TaskController.setTaskArchived)

router.post('/tasks', json(), TaskController.createTask)
export default router
