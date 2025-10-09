import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { ThemeProvider } from './context/ThemContext.jsx'

const App = () => {
  return (<ThemeProvider>
    <div className='w-[85%] mx-auto'>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      
      </div>
      </ThemeProvider>
  )
}

export default App