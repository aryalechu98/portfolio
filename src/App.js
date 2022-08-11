import React from 'react'
import Education from './components/Education/Education'
import Intro from './components/Intro/Intro'

import Navbar from './components/Navbar'
import Skills from './components/Skills/Skills'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
    </div>
  )
}

export default App