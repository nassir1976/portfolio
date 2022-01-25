const TopNav = ({windowDimension}) => {
    
  return (
      <div className="top-nav">
          <div className="top-nav-wrap">
              <a href="/">
                  <div className='top-left-nav'>
                      {
                      windowDimension.winWidth >= 400 ?
                      <img className="logo" src="https://imgur.com/zs238Rg.png" alt="owl"/>
                      :
                      <img src="https://imgur.com/zs238Rg.png" alt="owl"/>
                      }
                  </div>
              </a>
              <nav className='top-right-nav'>
                  <a href="#about">About</a>
                  <a href="#experience">Experience</a>
                  <a href="#projects">Projects</a>
                  <a href="#skills">Stack</a>
                  {/* <a href="#contact">contact</a> */}
                  <a href="https://docs.google.com/document/d/1MASRcUz2_6mGTWwM-fJ79ZG-CRu3w3t2FXp96TAnBBo/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
              </nav>
          </div>
      </div>
  )
}

export default TopNav