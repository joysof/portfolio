
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemContext.jsx'
import { ProjectProvider } from './context/Project.context.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ProjectProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProjectProvider>
    </ThemeProvider>

)
