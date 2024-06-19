import { useContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemeContext'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <footer className={`footer footer-${theme}`}>
            <div className='socials'>
                <Link to="'/" target='_blank' className={`${theme}-link`}></Link>
                <Link to="https://www.linkedin.com/in/kathy-l-242b82133/" target="_blank" className={`${theme}-link`}><FaLinkedin size="2em"/></Link>
                <Link to="https://github.com/liangkathy" target="_blank" className={`${theme}-link`}><FaGithub size="2em"/></Link>
            </div>
        </footer>
    )
}

export default Footer