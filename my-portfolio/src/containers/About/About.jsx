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
                <p className="about-me-text">I’m an aspiring software engineer coming from a non-traditional background with a bachelors degree in pre-med biology from UT Austin. My shift in career path led me to Indeed where I was a Client Success Specialist for over 2 years and discovered my interest in technology and software development.</p>
                
                <p className="about-me-text">Outside of work, I enjoy doing my nails, puzzles, traveling, and hanging out with my two cats (Snickers and Mochi).</p>
                

                <div className="about-links">
                    <Link to="https://kathyliang.netlify.app/" target="_blank" className={`${theme}-link about-link`}>Resume <LuExternalLink /></Link>
                    <Link to="https://docs.google.com/spreadsheets/d/1MoXBN-8kw9q7buzwDdDq4vHX9GcSjGNC7_blOcV7qMc/edit?usp=sharing" target="_blank" className={`${theme}-link about-link`}> Bootcamp Feedback <LuExternalLink /></Link>
                </div>
            </div>
        </section>
    )
}

export default About