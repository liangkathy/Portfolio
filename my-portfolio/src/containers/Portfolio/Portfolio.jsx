import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import './Portfolio.css'
import ProjectCard from "../ProjectCard/ProjectCard"


const Portfolio = () => {
    const {theme} = useContext(ThemeContext)

    const projects = [
        {
            title: "To Do App",
            summary: "Brief summary about project here",
            src: "",
            alt: "project image",
            GitHubURL: "https://github.com/liangkathy/To-Do-App",
            URL: "#",
            id: "project1",
            longSummary: "Extra details about the project here with more details and in depth explanation of project"
        },
        {
            title: "Animal Shelter Site",
            summary: "Brief summary about project here",
            src: "",
            alt: "project image",
            GitHubURL: "https://github.com/liangkathy/Animal-Shelter",
            URL: "#",
            id: "project2",
            longSummary: "Extra details about the project here with more details and in depth explanation of project"
        },
        {
            title: "Blog Site",
            summary: "Brief summary about project here",
            src: "",
            alt: "project image",
            GitHubURL: "https://github.com/liangkathy/Blog",
            URL: "#",
            id: "project3",
            longSummary: "Extra details about the project here with more details and in depth explanation of project"
        },
        {
            title: "Dictionary App",
            summary: "Brief summary about project here",
            src: "",
            alt: "project image",
            GitHubURL: "https://github.com/liangkathy/Java-Dictionary-App",
            URL: "",
            id: "project4",
            longSummary: "Extra details about the project here with more details and in depth explanation of project"
        }
    ]

    return (
        <section id="portfolio" className={`portfolio-section portfolio-${theme}`}>
            <h3>Portfolio</h3>
            <div className="project-container">
                {
                    projects.map((project, i) => {
                        return <ProjectCard key={i} 
                                id={project.id}
                                title={project.title}
                                summary={project.summary}
                                src={project.src}
                                alt={project.alt} 
                                GitHubURL={project.GitHubURL}
                                URL={project.URL} 
                                long={project.longSummary} />
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio