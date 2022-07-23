import React from 'react'
import Hero from './Hero'
import Search from './Search'
import Experience from './Experience'
import Footer from './Footer'

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Hero />
        <Search />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}

export default App