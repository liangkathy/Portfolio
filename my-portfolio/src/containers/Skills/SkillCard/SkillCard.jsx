
const SkillCard = ({logo, skillName, theme}) => {
    return (
        <div className="skill-card">
            <div id={`skill-icon-${theme}`}>{logo}</div>
            <div>{skillName}</div>
        </div>
    )
}

export default SkillCard