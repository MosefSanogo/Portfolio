import React, { useRef } from 'react'
import './formation.css'
import { useIntersecting } from '../../Methods/Intersecting';
function Formation({ref}) {
    const sectionRef = ref;
    const h1Ref = useRef(null);

    const cardRef = useRef(null);
    const cardH2Ref = useRef(null);
    const cardP1Ref = useRef(null);
    const cardP2Ref = useRef(null);

    const cardRef1 = useRef(null);
    const cardH2Ref1 = useRef(null);
    const cardP1Ref1 = useRef(null);
    const cardP2Ref1 = useRef(null);

    const cardRef2 = useRef(null);
    const cardH2Ref2 = useRef(null);
    const cardP1Ref2 = useRef(null);
    const cardP2Ref2 = useRef(null);

  useIntersecting(sectionRef, 0.3, 0); 
  useIntersecting(h1Ref, 0.2, 0.1);
  useIntersecting(cardRef, 0.2, 0);
  useIntersecting(cardH2Ref, 0.2, 0.1);
  useIntersecting(cardP1Ref, 0.2, 0.2);
  useIntersecting(cardP2Ref, 0.2, 0.3);

  useIntersecting(cardRef1, 0.2, 0);
  useIntersecting(cardH2Ref1, 0.2, 0.1);
  useIntersecting(cardP1Ref1, 0.2, 0.2);
  useIntersecting(cardP2Ref1, 0.2, 0.3);

  useIntersecting(cardRef2, 0.2, 0);
  useIntersecting(cardH2Ref2, 0.2, 0.1);
  useIntersecting(cardP1Ref2, 0.2, 0.2);
  useIntersecting(cardP2Ref2, 0.2, 0.3);
  return (
    <div className='formation' ref={sectionRef}>
        <h1 className='formation-title' ref={h1Ref}>Formation</h1>
        <div className="formation-content">
            <div className="formation-item" ref={cardRef}>
                <h2 ref={cardH2Ref}>Master 1 Informatique</h2>
                <p ref={cardP1Ref}>Université Le Havre Normandie - France, 2024 - à ce jour</p>
                <p ref={cardP2Ref} >Formation axée sur l'informatique generaliste, incluant le développement web, la visualisation des données, l'intelligence artificielle, la logistique et l'infographie.</p>
            </div>
            <div className="formation-item" ref={cardRef1}>
                <h2 ref={cardH2Ref1}>Master Systèmes informatiques et réseaux</h2>
                <p ref={cardP1Ref1}>Université de Blida - Algérie, 2019 - 2024</p>
                <p ref={cardP2Ref1}>Formation axée sur les systèmes informatiques et réseaux, incluant le développement logiciel et mobile, le réseau informatique, la cybersécurité et l'electronique.</p>
            </div>
            <div className="formation-item" ref={cardRef2}>
                <h2 ref={cardH2Ref2}>Baccalauréat en Sciences Expérimentales</h2>
                <p ref={cardP1Ref2}>LKDIEBA - Mali, 2019</p>
                <p ref={cardP2Ref2}>Formation axée sur les sciences exactes, incluant la physique, la chimie et les mathématiques.</p>
            </div>
        </div>
    </div>
  )
}

export default Formation
