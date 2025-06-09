import React, { useRef } from 'react'
import './projetCard.css'
import { FaGithub } from 'react-icons/fa'
import { useIntersecting } from '../../Methods/Intersecting';
function ProjetCard({data}) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const h1Ref = useRef(null);
  const descRef = useRef(null);
  const gitRef = useRef(null);
  const techRef = useRef(null);
  
  useIntersecting(cardRef, 0.2, 0);
  useIntersecting(imgRef, 0.2, 0.1);
  useIntersecting(h1Ref, 0.2, 0.1);
  useIntersecting(descRef, 0.2, 0.2);
  useIntersecting(techRef, 0.2, 0.3);
  useIntersecting(gitRef, 0.2, 0.2);

  return (
    <div className='projet-card'ref={cardRef}>
      <div className="projet-card__image" ref={imgRef}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className="projet-card__content">
        <h3 className='projet-card__title' ref={h1Ref}>{data.title}</h3>
        <p className='projet-card__description' ref={descRef}>{data.description}</p>
        <div className='projet-card__technologies' ref={techRef}>
          {data.technologies.map((tech, index) => (
            <div key={index} className='projet-card__technology'>{tech}</div>
          ))}   
        </div>
        <a href={data.link} className='projet-card__link' ref={gitRef} target='_blank'> <FaGithub/> Code </a>
      </div>
      
    </div>
  )
}

export default ProjetCard
