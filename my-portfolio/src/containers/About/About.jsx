import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import './About.css'

const About = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <section id="about" className={`about-section about-${theme}`}>

            <div className="about-content">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
    )
}

export default About