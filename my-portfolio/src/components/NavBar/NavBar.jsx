
import { HashLink } from "react-router-hash-link"
import './NavBar.css'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const NavBar = ({isNavOpen, closeNavByLink}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <nav className={`navbar ${isNavOpen ? `nav-open nav-${theme}` : undefined}`} id={`nav-${theme}`}>
            <li className='nav-link' onClick={closeNavByLink}><HashLink to="#home" className={`${theme}-link`} >Home</HashLink></li>
            <li className='nav-link' onClick={closeNavByLink}><HashLink to="#about" className={`${theme}-link`} >About</HashLink></li>
            <li className='nav-link' onClick={closeNavByLink}><HashLink to="#skills" className={`${theme}-link`} >Skills</HashLink></li>  
            <li className='nav-link' onClick={closeNavByLink}><HashLink to="#portfolio" className={`${theme}-link`} >Portfolio</HashLink></li>
            <li className='nav-link' onClick={closeNavByLink}><HashLink to="#contact" className={`${theme}-link`} >Contact</HashLink></li>  
        </nav>
    )
}

export default NavBar