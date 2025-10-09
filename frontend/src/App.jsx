import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { ThemeProvider } from './context/ThemContext.jsx'
import About from './components/About.jsx'

const App = () => {
  return (<ThemeProvider>
    <div className='bg-white/5'>
    <div className='w-[85%] mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
      </div>
      </div>
      </ThemeProvider>
  )
}

export default App