import React from 'react'
import './project.css'
import ProjetCard from '../../components/projet/ProjetCard'
import { useIntersecting } from '../../Methods/Intersecting';
import { projects } from '../../Methods/Data';
function Project({ref}) {
    
  const h1Ref = React.useRef(null);
  const cardRef = React.useRef(null);

  useIntersecting(h1Ref, 0.2, 0.1);
  useIntersecting(cardRef, 0.2, 0);
  return (
    <div className='project' ref={ref}>
      <h1 ref={h1Ref}>Projets</h1>
      <div className="project-list" ref={cardRef}>
        {projects.map((project, index) => (
          <ProjetCard key={index} data={project} />
        ))}
      </div>     
    </div>
  )
}

export default Project
