import SkillCard from "../components/SkillCard";
import { SkillData } from "../data";

const Skills = () => {
    return (
        <div id="skills">
            <h1>Stack</h1>
            <p>Techs I enjoy using regularly</p>
            <h2>Languages</h2>
            <div className="skills-container">
                {
                    SkillData && SkillData.filter(skill => skill.type === "languages").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
            <h2>Frontend</h2>
            <div className="skills-container">
                {
                    SkillData && SkillData.filter(skill => skill.type === "frontend").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
            <h2>Backend &amp; Databases</h2>
            <div className="skills-container">
                {
                    SkillData && SkillData.filter(skill => skill.type === "backend").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
            <h2>Other</h2>
            <div className="skills-container">
                {
                    SkillData && SkillData.filter(skill => skill.type === "other").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
                </div>
        </div>
    )
}

export default Skills