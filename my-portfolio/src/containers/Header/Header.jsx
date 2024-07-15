
import NavBar from "../../components/NavBar/NavBar"

import { useContext, useState, useEffect, useLayoutEffect } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { DarkModeSwitch } from "react-toggle-dark-mode";

import './Header.css'

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if(storedTheme) {
            setTheme(storedTheme)
        }
    },[setTheme])

    //toggle between themes
    const handleThemeToggle = (e) => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        
    }

    const isCheckedTheme = theme === "light"

    const toggleNavOpen = () => {
        setIsNavOpen(!isNavOpen)
        setIsHamburgerOpen(!isHamburgerOpen)
    }

    const closeNavByLink = () => {
        setIsNavOpen(!isNavOpen)
        setIsHamburgerOpen(!isHamburgerOpen)
    }

    //ensure hamburger menu and nav close when screen size is over 768px
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useLayoutEffect(() => {
        const updateSize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', updateSize)
        updateSize()
        
        //clean up and remove event listener
        return () => removeEventListener('resize', updateSize)
    },[])

    useEffect(() => {
        if (windowSize >= 768) {
            setIsNavOpen(false)
            setIsHamburgerOpen(false)
        }
    },[windowSize])

    return (
        <header className="header">
            <div className={`logo-text logo-text-${theme}`}>Kathy Liang</div>
            <NavBar isNavOpen={isNavOpen} closeNavByLink={closeNavByLink}/>
            <DarkModeSwitch 
                style={{ marginBottom: '1rem' }}
                checked={isCheckedTheme}
                onChange={handleThemeToggle}
                size={30}
                moonColor="gray" 
                sunColor="lightyellow"/>

            <div className={isHamburgerOpen ? "hamburger hamburger-open" : "hamburger"} onClick={toggleNavOpen}>
                <div className={`bar bar-${theme}`}></div>
                <div className={`bar bar-${theme}`}></div>
                <div className={`bar bar-${theme}`}></div>
            </div>

        </header>
    )
}

export default Header