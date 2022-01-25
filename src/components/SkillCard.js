const SkillCard = ( {title, photo} ) => {

  return (
      <div>
          <div><img className="skill-img" src={photo} alt=""/></div>
          <p>{title}</p>
      </div>
  )
}

export default SkillCard