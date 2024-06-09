import { useContext } from 'react'
import './Button.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const Button = ({text, onClick, className, type}) => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <button className={`button ${className} button-${theme}`} onClick={onClick} type={type}>{text}</button>
    )
}

export default Button