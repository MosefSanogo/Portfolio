import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './navBar.css'
function NavBar({refs}) {
  const [scrolled, setScrolled] = useState(false);
  const[open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
      const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
        <div className="navbar__logo">
            <a href="/">Portfolio</a>
        </div>
        <div className="nav_main">
          <div className={`navbar__toggle ${open ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`navbar__links ${open ? "active" : ""}`}>
            <li><a  onClick={() => {handleScroll(refs.home), setOpen(false)}}>Accueil</a></li>
            <li><a onClick={() => {handleScroll(refs.skill), setOpen(false)}}>Compétence</a></li>
            <li><a onClick={() => {handleScroll(refs.project), setOpen(false)}}>Projet</a></li>
            <li><a onClick={() => {handleScroll(refs.formation), setOpen(false)}}>Formation</a></li>
            <li><a onClick={() => {handleScroll(refs.contact), setOpen(false)}}>Contact</a></li>
          </ul>
        </div>
        
        <div className="navbar__actions">
            <a href="https://github.com/MosefSanogo" className="btn btn-primary" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mohamed-sanogo-a62563303/"  target='_blank' className="btn btn-secondary"><FaLinkedin /></a>
        </div>
    </nav>

  )
}

export default NavBar
