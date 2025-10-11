import Project from '../models/Project.models.js'

const getAllProjects = async () => {
  try {
    const projects = await Project.find()
    return projects
  } catch (error) {
    throw new Error(error.message)
  }
}

const createProject = async (data) => {
  try {
    const newProject = new Project(data)
    const savedProject = await newProject.save()
    return savedProject
  } catch (error) {
    throw new Error(error.message)
  }
}

export default {
  getAllProjects,
  createProject,
}
