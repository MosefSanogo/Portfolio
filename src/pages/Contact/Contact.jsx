import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'
import './contact.css'
import { useIntersecting } from '../../Methods/Intersecting';
function Contact({ref}) {
    const sectionRef = ref;
    const h1Ref = React.useRef(null);
    const pRef = React.useRef(null);
    const contactInfoRef = React.useRef(null);
    // Utilisation de useIntersecting pour observer les éléments
    useIntersecting(sectionRef, 0.3, 0);
    useIntersecting(h1Ref, 0.2, 0.2);   
    useIntersecting(pRef, 0.2, 0.3);
    useIntersecting(contactInfoRef, 0.4, 0.4);  

  return (
    <div className='contact' ref={sectionRef}>
      <h1 ref={h1Ref}>Contact</h1>
      <p    ref={pRef}>Vous avez une idée ou vous cherchez un développeur en alternance motivé en Web / mobile ?
            Je suis ouvert aux opportunités et toujours prêt à échanger !</p>
      <div className="contact_info" ref={contactInfoRef}>
        <a href="mailto:mosefsanogo366@gmail.com" target='_blank'><FaEnvelope/> Email </a>
        <a href="tel:+33 7 58 75 29 55" target='_blank'><FaPhone/> Téléphone</a>
        <a href="https://www.linkedin.com/in/mohamed-sanogo-a62563303/" target='_blank'><FaLinkedin/> LinkedIn</a>
      </div>
      
    </div>
  )
}

export default Contact
