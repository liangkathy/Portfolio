import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import './About.css'
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom"

const About = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <section id="about" className={`about-section about-${theme}`}>

            <div className="about-content">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className="about-links">
                    <Link to="https://kathyliang.netlify.app/" target="_blank" className={`${theme}-link about-link`}>Resume <LuExternalLink /></Link>
                    <Link to="https://docs.google.com/spreadsheets/d/1MoXBN-8kw9q7buzwDdDq4vHX9GcSjGNC7_blOcV7qMc/edit?usp=sharing" target="_blank" className={`${theme}-link about-link`}> Bootcamp Feedback <LuExternalLink /></Link>
                </div>
            </div>
        </section>
    )
}

export default About