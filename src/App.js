
import { useEffect, useState } from 'react';
import './styles/App.css';
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import LeftSideNav from './components/LeftSideNav'
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';




const overlay = (
  <div>
      <div className="landing-overlay">
        <img src="https://imgur.com/si8OIbR.png" alt=""className="owl-overlay"/>
      </div>
  </div>
)


function App() {
  const [rendered, setRendered] = useState(overlay)
  const [windowDimension, detectHW] = useState({
  winWidth: window.innerWidth,
  winHeight: window.innerHeight,
})

const current = (
  <div className="App">
    <TopNav windowDimension={windowDimension}/>
    <div className="bottom-app">
      { windowDimension.winWidth >= 400 &&  <LeftSideNav /> }
      <main id="main">
      <div>
       <Landing/> 
       </div>
        <About/> 
        <Experience/>
        <Projects/>
        <Skills/>
        {/* <Contact/> */}
        <BottomNav /> 
      
      </main>
    
      {  windowDimension.winWidth < 400 &&  <BottomNav /> }
     
    </div>  

  </div>
)

  const detectSize = () => {
  detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
  })
  }

  // for resizing
  useEffect(() => {
      window.addEventListener('resize', detectSize)
      return () => {
      window.removeEventListener('resize', detectSize)
      }
  }, [windowDimension])

  // for landing animation
  useEffect(() => {
    const timer = setTimeout(() => setRendered(current), 1000);
    return () => clearTimeout(timer);
  });

  return (
    rendered
  );
}
console.log(Experience)
export default App;