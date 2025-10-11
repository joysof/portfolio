import projectService from '../services/project.service.js'

const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addProject = async (req, res) => {
  try {
    const { title, description, githubLink, liveLink, techStack } =
      req.body
    const newProject = await projectService.createProject({
      title,
      description,
      githubLink,
      liveLink,
      techStack,
    })
    res.status(201).json(newProject)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default {
  getProjects,
  addProject,
}
