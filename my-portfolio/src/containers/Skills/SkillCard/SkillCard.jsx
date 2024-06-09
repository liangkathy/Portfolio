
const SkillCard = ({logo, skillName}) => {
    return (
        <div className="skill-card">
            <div>{logo}</div>
            <div>{skillName}</div>
        </div>
    )
}

export default SkillCard