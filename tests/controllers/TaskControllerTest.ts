import { app } from '../../index';
import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import sinon from 'sinon';
import * as TaskRepository from '../../src/repositories/task.repository';
import { Task } from '../../src/entities/Task';



chai.use(chaiHttp);
const expect = chai.expect;

describe('Task Controller', () => {
  const sandbox = sinon.createSandbox()
  it('should return some tasks', () => {
    
    return chai.request(app).get('/tasks')
      .then(res => {
        chai.expect(res.text).to.eql("User is not authenticated");
      })
  })

  it('should return some tasks', () => {
    
    return chai.request(app).get('/tasks').set('userId','1')
      .then(res => {
        chai.expect(res.body.length).to.eql(5);
      })
  })
  
  it('Change task status from archived to ToDo', async () => {
    TaskRepository.setTaskArchived(1,3)   
    await chai.request(app).post('/tasks/3/ToDo').set('userId','1')
    const taskModified = (await TaskRepository.getById(3)) as Task
    chai.expect(taskModified.status).is.eq('ToDo')
  })

  it('Change task status from archived to InProgress', async () => {
    TaskRepository.setTaskArchived(1,3)   
    await chai.request(app).post('/tasks/3/InProgress').set('userId','1')
    const taskModified = (await TaskRepository.getById(3)) as Task
    chai.expect(taskModified.status).is.eq('InProgress')
  })

  it('Change task status from archived to Done', async () => {
    TaskRepository.setTaskArchived(1,3)   
    await chai.request(app).post('/tasks/3/Done').set('userId','1')
    const taskModified = (await TaskRepository.getById(3)) as Task
    chai.expect(taskModified.status).is.eq('Done')
  })
  
  it('Delete task chainging its status from Done to archived', async () => {
    TaskRepository.setTaskDone(1,3)   
    await chai.request(app).delete('/tasks/3').set('userId','1')
    const taskModified = (await TaskRepository.getById(3)) as Task
    chai.expect(taskModified.status).is.eq('archived')
  })
})