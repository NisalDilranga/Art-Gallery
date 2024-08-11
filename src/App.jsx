import React from 'react'
import Home from './pages/Home'
import Main from './pages/Main'
import About from './pages/About'
import Collection from './pages/Collection'
import Footer from './pages/Footer'
import Header from './pages/Header'


function App() {

  return (
    <>
    < Header />
    < Home />
    < Main />
    < About />
    < Collection />
    < Footer />
    <div className="credits">
      <span className="copyrights">Copyright © 2024, induwara arts.</span><br />
     
    </div>
    </>
  )
}

export default App