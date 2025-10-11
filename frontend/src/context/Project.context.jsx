import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
    const backendURL = import.meta.env.VITE_BACKEND_URL

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${backendURL}/api/project/getAllProject`)
      setProjects(res.data)
    } catch (err) {
      console.error('Error fetching projects:', err.message)
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <ProjectContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectContext.Provider>
  )
}


export const useProjects = () => useContext(ProjectContext)
