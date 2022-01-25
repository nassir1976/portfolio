const ProjectPage= ({title, description, link, subtitle, github, closeOverlay}) => {


  return (
    <div className="project-page overlay-wrapper" onKeyPress={(e) => e.key === "Escape" && closeOverlay}>
      <div className="backdrop"></div>
      <div className="details-cont overlay-content">
        <img src="https://i.imgur.com/cdUyJgN.png" alt="close-x" role="button" onClick={closeOverlay} className="overlay-close" />
        <h1 className="title">{title}</h1>
        <h2 className='technologies'>{subtitle}</h2>
        <p className='description'>{description}</p>
        <div className="links-cont">
          <a href={link} rel="noreferrer" target="_blank" className="">Demo</a> | 
          <a href={github} rel="noreferrer" target="_blank" className="">Github</a>
        </div>
      </div>            
    </div>
  )
}
export default ProjectPage