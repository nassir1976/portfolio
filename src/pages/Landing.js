import React from 'react';
import Typewriter from "typewriter-effect"

const typewriter = (
  <div className="landing-wrapper" >
      <div className="rolling-header">
          <Typewriter 
              options={{ strings: [
              'Fast load times and lag free interaction, my highest priority',
              'collaborative',
              'growth-minded',
              'motivated',
              'Strong preference for easy to use, intuitive UX/UI.',
              'My layouts will work on any device, big or small',
              ],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 31,
              cursor: ''
              }}
          />
      </div>          
  </div>
)

const Landing = () => {

  return (
    <div id='landing'>
      <div className="land-intro" >
        <h1 className="land-h1-1">Hi, I'm Nassir.</h1>
        <h1 className="land-h1-2">I build <span className="teal">equity-minded and accessible</span> technologies.</h1>
        <p>I am a <span className="teal">{typewriter}</span> full-stack software Developer with a passion for React and Material-ui . Currently, I am focused on making awesomeness in my role as a <span className="teal">Web Developer Intern</span> with <span className="teal">xxxx</span>. </p>
      </div>
    </div>
  )
}

export default Landing
