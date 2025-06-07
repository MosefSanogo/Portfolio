import { useRef } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home';
import Skill from './pages/Skill/Skill';
import Project from './pages/Project/Project';
import Formation from './pages/Formation/Formation';
import Contact from './pages/Contact/Contact';


function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projetRef = useRef(null);
  const formationRef = useRef(null);
  const contactRef = useRef(null);
 
  return (
    <div>
      <NavBar
        refs={{
          home: homeRef,
          skill: skillRef,
          project: projetRef,
          formation: formationRef,
          contact: contactRef
        }}
      />
      <Home ref={homeRef} />
      <Skill ref={skillRef} />
      <Project ref={projetRef} />
      <Formation ref={formationRef} />
      <Contact ref={contactRef} />
      <div className='footer' >
        <p>© 2025 Mohamed Sanogo. Tous droits réservés.</p>
      </div>
 
    </div>
  )
}

export default App
