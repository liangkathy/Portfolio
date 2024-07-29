import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import './Portfolio.css'
import ProjectCard from "../ProjectCard/ProjectCard"

import toDo from '../../assets/toDo/to-do.png'
import toDoDark from '../../assets/toDo/to-do-dark.png'
import toDoVideo from '../../assets/toDo/todo-demo.mp4'
import toDoVideoDark from '../../assets/toDo/todo-demo-dark.mp4'

import blog from '../../assets/blog/blog.png'
import blogDark from '../../assets/blog/blog-dark.png'
import blogVideo from '../../assets/blog/blog-demo.mp4'
import blogVideoDark from '../../assets/blog/blog-demo-dark.mp4'

import dictionary from '../../assets/dictionary/dictionary.png'
import dictionaryVideo from '../../assets/dictionary/dictionary-demo.mp4'

import shelter from '../../assets/animalshelter/shelter.png'
import shelterDark from '../../assets/animalshelter/shelter-dark.png'
import shelterVideo from '../../assets/animalshelter/shelter.mp4'

const Portfolio = () => {
    const {theme} = useContext(ThemeContext)

    const projects = [
        {
            title: "To Do App",
            src: theme === 'light' ? toDo : toDoDark,
            alt: "to-do app",
            GitHubURL: "https://github.com/liangkathy/To-Do-App",
            URL: "https://kathy-liang-to-do.netlify.app/",
            id: "project1",
            longSummary: "This app can track your to-do list items. Tasks can be added, deleted, or marked as completed. Any tasks and their status will be tracked in the History tab and are searchable from the Search tab.",
            video: theme === 'light' ? toDoVideo : toDoVideoDark,
            tags: ["React"]
        },
        {
            title: "Animal Shelter Site",
            src: theme === 'light' ? shelter : shelterDark,
            alt: "project image",
            GitHubURL: "https://github.com/liangkathy/Animal-Shelter",
            URL: "#",
            id: "project2",
            longSummary: "This is my capstone project that connects a backend database to the frontend animal shelter site. It utilizes Spring Security to generate a JSON Web Token to identify a user as an admin. If logged in with admin access, the user has additional tools from the Admin Home page and can masquerade as a regular user viewing the site.",
            video: shelterVideo,
            tags: ["React", "CSS", "Spring Boot", "Spring Security"]
        },
        {
            title: "Blog Site",
            src: theme === 'light' ? blog : blogDark,
            alt: "blog site",
            GitHubURL: "https://github.com/liangkathy/Blog",
            URL: "",
            id: "project3",
            longSummary: "This is my inclusive blog app for users to connect to their community. The frontend also includes a trivia mini-game when viewed in full screen. Note: Frontend and backend are not currently connected so the official blog site has not been deployed yet.",
            video: theme === 'light' ? blogVideo : blogVideoDark,
            tags: ["Javascript", "HTML", "CSS", "Spring Boot"]
        },
        {
            title: "Dictionary App",
            src: dictionary,
            alt: "dictionary CLI",
            GitHubURL: "https://github.com/liangkathy/Java-Dictionary-App",
            URL: "",
            id: "project4",
            longSummary: "This dictionary app allows users to look up words, add and delete words from the dictionary, and also includes a random word generator.",
            video: dictionaryVideo,
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