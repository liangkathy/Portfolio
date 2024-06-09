import Header from './containers/Header/Header'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Work from './containers/Work/Work'
import Contact from './containers/Contact/Contact'
import Footer from './components/Footer/Footer'

import { ThemeContext } from './contexts/ThemeContext'
import { useState } from 'react'

import './App.css'

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
