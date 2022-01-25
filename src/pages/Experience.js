import { Route, Routes, Link } from "react-router-dom"
import { useState } from "react"
import ExperienceCard from '../components/ExperienceCard'
import { ExperienceData } from '../data'

const Experience = () => {
    const [clickedJob, setClickedJob] = useState(ExperienceData[0])
    const [clicked, toggleClicked] = useState(false)
    
    const handleClick = async (e) => {
        await e 
        if (e.type === "click") {
            setClickedJob(ExperienceData[e.target.id - 1])
            toggleClicked(true)
        }
    }
    
    
    return (
        <div id="experience" >
            <h1>Experience</h1>
            <p>Workplaces where I've made an impact</p>

             <div className='experience-container'>         
                 <nav onClick={(e) => (e.target.id >= 1 && e.target.id <= 10) && handleClick(e)}>
                    <h1>Construction Engineer</h1>
                    <div>
                        <Link to={`/experience/1`}><p id={1}>Sur Construction PLC</p></Link>
                        <Link to={`/experience/2`}><p id={2}>ESRDF</p></Link>
                        <Link to={`/experience/3`}><p id={3}>Siltie Zone Construction Dept</p></Link>
                        <Link to={`/experience/4`}><p id={4}>M.H engineering</p></Link>
                    </div>
                     
                    <h1>Software Developer</h1>    
                    <div>
                        <Link to={`/experience/5`}><p id={5}>PLACE HOLDER</p></Link>
                        
                    </div> 
                </nav>
                
                <div className='exp-cards-container'>
                    {
                        !clicked
                        ? <ExperienceCard title={clickedJob.title} company={clickedJob.company} date={clickedJob.date} duties={clickedJob.duties}/>
                        : <Routes> <Route key={clickedJob.id} path={`/experience/${clickedJob.id}`} element={<ExperienceCard title={clickedJob.title} company={clickedJob.company} date={clickedJob.date} duties={clickedJob.duties}/>}/> </Routes>
                    }
                </div>
            </div>  
        </div>
    )
}

export default Experience