import { Link } from 'react-router-dom'
import { IoArrowForward } from "react-icons/io5";
import image from "../../assets/image-icon.png";

import './ProjectCard.css'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ProjectDetails from './ProjectDetails/ProjectDetails';

const ProjectCard = ({id, title, summary, src, alt, GitHubURL, URL, long}) => {
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
                        <div>{summary}</div>
                        <Link className={`${theme}-link see-more`} onClick={toggleExpand} >See more <IoArrowForward size="1.5em"/></Link>
                    </div>
                    <img className="project-img" src={image} alt={alt} width="120px"/>
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
                    toggleExpand={toggleExpand} />
            }  
        </div>
    )
}

export default ProjectCard