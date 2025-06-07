import React, {  useRef } from 'react'
import './skill.css'
import { FaAngular, FaBackspace, FaCss3, FaDatabase, FaFigma, FaFileExcel, FaFilePowerpoint, FaFileWord, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiAndroidstudio, SiExpress, SiFirebase, SiMongodb, SiMysql, SiPhp, SiPostgresql, SiPostman, SiProcessingfoundation, SiTailwindcss, SiTypescript, SiVirustotal, SiVsco } from 'react-icons/si';
import { GiSpikyEclipse } from 'react-icons/gi';
import { VscCode } from 'react-icons/vsc';
import { useIntersecting } from '../../Methods/Intersecting';
function Skill({ref}) {
    const containRef = ref;
    const h1Ref = useRef(null);
    const cardRef = useRef(null);
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);

      useIntersecting(containRef, 0.3, 0);
      useIntersecting(h1Ref, 0.2, 0.1);
      useIntersecting(cardRef, 0.4, 0);
      useIntersecting(cardRef1, 0.4, 0);
      useIntersecting(cardRef2, 0.4, 0);

  return (
    <div className='skill' ref={containRef}>
      <h1 ref={h1Ref}>Compétences</h1>
      <div className="items">
            <div className='card' ref={cardRef}>
                <h2 className='card-title'>Front-End</h2>
                <div className="item">
                    <div className="item-card">
                        <div className="svg"><FaHtml5/> </div>
                        <p className='item-description'>HTML5</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaCss3/> </div>
                        <p className='item-description'>CSS3</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaJs/> </div>
                        <p className='item-description'>JavaScript</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiTypescript/> </div>
                        <p className='item-description'>TypeScript</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaReact/> </div>
                        <p className='item-description'>React</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaReact/> </div>
                        <p className='item-description'>React Native</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiTailwindcss/> </div>
                        <p className='item-description'>Tailwind CSS</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaJava/> </div>
                        <p className='item-description'>JSP</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><VscCode/> </div>
                        <p className='item-description'>JSTL</p>
                    </div>
                </div>
            </div>

            <div className='card' ref={cardRef1}>
                <h2 className='card-title'>Back-End</h2>
                <div className="item">
                    <div className="item-card">
                        <div className="svg"><FaNodeJs/> </div>
                        <p className='item-description'>NodeJs</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiExpress/> </div>
                        <p className='item-description'>ExpressJs</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaJava/> </div>
                        <p className='item-description'>Java</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaPython/> </div>
                        <p className='item-description'>Python</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiPhp/> </div>
                        <p className='item-description'>PHP</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiMysql/> </div>
                        <p className='item-description'>MySql</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiMongodb/> </div>
                        <p className='item-description'>MongoDB</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiPostgresql/> </div>
                        <p className='item-description'>PostgreSQL</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiFirebase/> </div>
                        <p className='item-description'>Firebase</p>
                    </div>

                </div>
            </div>

            <div className='card' ref={cardRef2}>
                <h2 className='card-title'>Outils</h2>
                <div className="item">
                    <div className="item-card">
                        <div className="svg"><FaGit/> </div>
                        <p className='item-description'>Git</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaGithub/> </div>
                        <p className='item-description'>Github</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaFigma/> </div>
                        <p className='item-description'>Figma</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><GiSpikyEclipse/> </div>
                        <p className='item-description'>Eclipse</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiAndroidstudio/> </div>
                        <p className='item-description'>Android Studio</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiVirustotal/> </div>
                        <p className='item-description'>VsCode</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><SiProcessingfoundation/> </div>
                        <p className='item-description'>Processing</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaFileWord/> </div>
                        <p className='item-description'>Word</p>
                    </div>
                    <div className="item-card">
                        <div className="svg"><FaFileExcel/> </div>
                        <p className='item-description'>Excel</p>
                    </div>
                

                </div>
            </div>
      </div>
    </div>
  )
}

export default Skill
