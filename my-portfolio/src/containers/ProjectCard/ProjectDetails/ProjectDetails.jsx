import '../ProjectCard.css'
import image from "../../../assets/image-icon.png"
import Button from '../../../components/Button/Button'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'

const ProjectDetails = ({id, title, long, src, alt, GitHubURL, URL, toggleExpand, tags, video}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div id={`${id}-${theme}`} className={`project-details card-${theme}`}>
            <Link className={`${theme}-link close-details`} onClick={toggleExpand}><IoClose size="1.5em"/><span className='close-words'>Close details</span></Link>
            <h4 className='project-title'>{title}</h4>
            <div className='project-tags'>
                {
                    tags.map((tag, i) => {
                        return <div key={i} className={`project-tag tag-${theme}`}>{tag}</div>
                    })
                }
            </div>
            {
                video != "" ?
                <video width="75%"
                    autoPlay
                    muted
                    loop
                    >
                    <source src={video} type='video/mp4'/>
                </video> :
                <img className="project-img" src={src == "" ? image : src} alt={alt} width="75%"/>
            }
            
            <div className='long-summary'>{long}</div>
            <div className='project-buttons'>
                <Link to={GitHubURL} target="_blank">
                    <Button text={'GitHub'}/>
                </Link>
                {
                    URL && 
                    <Link to={URL} target="_blank">
                        <Button text={'View Project'}/>
                    </Link>
                }
             
            </div>
            
        </div>
    )
}

export default ProjectDetails