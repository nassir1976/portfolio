import { useState } from "react";
import ProjectPage from "../pages/ProjectPage"
import Overlay from "react-overlay-component";

const ProjectCard = ({project}) => {
    const [isOpen, toggleIsOpen] = useState(false)

    const configs = {
        animate: true,
        clickDismiss: true,
        escapeDismiss: true,
        contentClass: "overlay-content overlay-wrapper "
    }

    return (
        <div className="project-card">
            <div className="project-wrapper" onClick={() => toggleIsOpen(true)}>
                <img src={project.image} alt="project screenshot" />
                <div className="project-details"></div> 
            </div>

            <Overlay  configs={configs} isOpen={isOpen}  closeOverlay={() => toggleIsOpen(false)}>
                <ProjectPage closeOverlay={() => toggleIsOpen(false)} title={project.title} description={project.description} github={project.github} link={project.link} technologies={project.technologies} subtitle={project.subtitle}/> 
            </Overlay>
        </div>
    )
}
export default ProjectCard