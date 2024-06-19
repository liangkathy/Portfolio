import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import './Portfolio.css'
import ProjectCard from "../ProjectCard/ProjectCard"

const Portfolio = () => {
    const {theme} = useContext(ThemeContext)

    const projects = [
        {
            title: "To Do App",
            src: theme === 'light' ? 'src/assets/toDo/to-do.png' : 'src/assets/toDo/to-do-dark.png',
            alt: "to-do app",
            GitHubURL: "https://github.com/liangkathy/To-Do-App",
            URL: "https://kathy-liang-to-do.netlify.app/",
            id: "project1",
            longSummary: "Extra details about the project here with more details and in depth explanation of project",
            video: theme === 'light' ? 'src/assets/toDo/todo-demo.mp4' : 'src/assets/toDo/todo-demo-dark.mp4',
            tags: ["React"]
        },
        {
            title: "Animal Shelter Site",
            src: "",
            alt: "project image",
            GitHubURL: "https://github.com/liangkathy/Animal-Shelter",
            URL: "#",
            id: "project2",
            longSummary: "Extra details about the project here with more details and in depth explanation of project",
            video: "",
            tags: ["React", "Spring Boot"]
        },
        {
            title: "Blog Site",
            src: theme === 'light' ? 'src/assets/blog/blog.png' : 'src/assets/blog/blog-dark.png',
            alt: "blog site",
            GitHubURL: "https://github.com/liangkathy/Blog",
            URL: "#",
            id: "project3",
            longSummary: "Note: Frontend and backend are not currently connected",
            video: theme === 'light' ? 'src/assets/blog/blog-demo.mp4' : 'src/assets/blog/blog-demo-dark.mp4',
            tags: ["Javascript", "HTML", "CSS", "Spring Boot"]
        },
        {
            title: "Dictionary App",
            src: "src/assets/dictionary/dictionary.png",
            alt: "dictionary CLI",
            GitHubURL: "https://github.com/liangkathy/Java-Dictionary-App",
            URL: "",
            id: "project4",
            longSummary: "Extra details about the project here with more details and in depth explanation of project",
            video: "src/assets/dictionary/dictionary-demo.mp4",
            tags: ["Java"]
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
                                src={project.src}
                                alt={project.alt} 
                                GitHubURL={project.GitHubURL}
                                URL={project.URL} 
                                long={project.longSummary}
                                video={project.video}
                                tags={project.tags} />
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio