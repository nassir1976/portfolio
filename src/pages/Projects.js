import { ProjectData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects">
            <h1>Featured Projects</h1>
            <p>Some projects I loved building. Select a card to learn more!</p>
            <div>
                {
                    ProjectData.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))
                }
            </div>
            
            {/* <figure class="c4-izmir">
                <img src="https://source.unsplash.com/FaPxZ88yZrw/400x300" alt="Sample" />
                <figcaption>
                    <h3>Some sample text</h3>
                </figcaption>
            </figure> */}
        </div>
    )
    
}

export default Projects