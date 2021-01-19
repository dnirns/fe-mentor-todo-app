import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Nav />
      <div className='container px-8 mx-auto'>
        <Home />
      </div>
    </>
  )
}

export default App
