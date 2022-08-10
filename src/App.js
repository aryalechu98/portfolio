import React from 'react'
import Intro from './components/Intro/Intro'

import Navbar from './components/Navbar'
import Skills from './components/Skills/Skills'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  )
}

export default App