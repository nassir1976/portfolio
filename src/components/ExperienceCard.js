const ExperienceCard = ({title, company, date, duties}) => {

  return (
      <div className="experience-card-wrapper">
          <h1>{title}</h1>
          <p>{date}</p>
          <ul>
              {
                  duties.map((duty, index) => (
                      <li key={index}> {duty} </li>
                  ))  
              }  
          </ul>
      </div>
  )
}
export default ExperienceCard


