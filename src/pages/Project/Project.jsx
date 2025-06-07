import React, {  useEffect } from 'react'
import './project.css'
import ProjetCard from '../../components/projet/ProjetCard'
import gsap from 'gsap';
function Project({ref}) {
    const projects = [
        {
            title: "Logiciel web de gestion des élèves",
            description: "Développement d’un logiciel de gestion des élèves et des professeurs pour une école, incluant la gestion des notes, des absences et des emplois du temps.",
            image: "./src/assets/Education.png",
            technologies: ["Java", "Java EE", "JSP", "Servlets", "MySQL", "CSS", "HTML", "JavaScript", "Tomcat", "JSTL","Validation"],
            link: ""
        },
        {
            title: "Logiciel web de gestion de cabinet d'avocat",
            description: "Création d’un logiciel de gestion pour un cabinet d’avocat, permettant la gestion des dossiers, des clients et des factures.",
            image: "./src/assets/Cabinet.png",
            technologies: ["Java", "Java EE", "JSP", "Servlets", "MySQL", "CSS", "HTML", "JavaScript", "Tomcat", "JSTL","Web/Socket"],
            link: "https://github.com/MosefSanogo/Cabinet/tree/master"
        },
        {
            title: "Portfolio Personnel",
            description: "Création d’un portfolio personnel pour présenter mes compétences et mes projets, incluant des sections sur mon parcours, mes compétences et mes réalisations.",
            image: "./src/assets/Portfolio.png",
            technologies: ["ReactJs", "JSX", "GSAP", "CSS", "HTML", "JavaScript", "Vite", "React Router", "Hooks"],
            link: ""
        },
        {
          title: "Billetterie",
          description: "Développement d’un système de billetterie pour un événement, permettant la vente et la gestion des billets en ligne.",
          image: "./src/assets/Site.png",
          technologies: ["ReactJs", "JSX", "GSAP", "CSS", "HTML", "JavaScript", "Vite", "React Router", "Hooks", "NodeJs", "Express", "MySQL", "JWT", "Axios" ,"Responsive Design", "Bycrypt"],
          link: ""
        },
        {
          title: "Login/Register",
          description: "Développement d’un système de connexion et d’inscription sécurisé, permettant aux utilisateurs de créer un compte et de se connecter.",
          image: "./src/assets/Login.png",
          technologies: ["ReactJs", "JSX", "CSS", "JavaScript", "Vite", "React Router", "Hooks", "NodeJs", "Express", "MySQL", "JWT", "Axios" ,"Responsive Design", "Bycrypt"],
          link: ""
        },
        {
          title: "Affichage des données de capteurs MQTT",
          description: "Création d’une application web pour afficher les données de capteurs connectés via MQTT, permettant la visualisation en temps réel des données.",
          image: "./src/assets/Mqtt.png",
          technologies: ["ReactJs", "JSX", "CSS", "JavaScript", "Vite", "React Router", "Hooks", "Axios" ,"MQTT", "WebSocket"],
          link: ""
        }
    ];
  const containRef = ref;
  const h1Ref = React.useRef(null);
  const cardRef = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({ ease: "power2.out" });
          tl.fromTo(h1Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
            .fromTo(cardRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");
          observer.unobserve(containRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (containRef.current) {
      observer.observe(containRef.current);
    }

    return () => observer.disconnect();
  }, [containRef]);
  return (
    <div className='project' ref={containRef}>
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
