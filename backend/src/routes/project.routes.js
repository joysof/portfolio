import express from 'express'
import projectContrller  from '../controllers/Project.controller.js'

const projectRouter = express.Router()

projectRouter.get('/getAllProject' , projectContrller.getProjects)
projectRouter.post('/addProject' , projectContrller.addProject)

export default  projectRouter