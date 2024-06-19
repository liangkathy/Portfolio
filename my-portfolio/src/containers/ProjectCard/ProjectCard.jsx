import { Link } from 'react-router-dom'
import { IoArrowForward } from "react-icons/io5";
import image from "../../assets/image-icon.png";

import './ProjectCard.css'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import toDo from '../../assets/toDo/to-do.png'

const ProjectCard = ({id, title, src, alt, GitHubURL, URL, long, video, tags}) => {
    const {theme} = useContext(ThemeContext)
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div>
            {
                !isExpanded ? 
                <div id={`${id}-${theme}`} className={`project-card card-${theme}`} >
                    <div className='card-left'>
                        <h4 className='project-title'>{title}</h4>
                        <Link className={`${theme}-link see-more`} onClick={toggleExpand} >See more <IoArrowForward size="1.5em"/></Link>
                    </div>
                    <img className="project-img" src={src == "" ? image : src} alt={alt} width="200px"/>
                </div>
                : 
                <ProjectDetails 
                    id={id}
                    title={title}
                    src={src}
                    alt={alt}
                    GitHubURL={GitHubURL}
                    URL={URL}
                    long={long}
                    toggleExpand={toggleExpand}
                    tags={tags}
                    video={video} />
            }  
        </div>
    )
}

export default ProjectCard