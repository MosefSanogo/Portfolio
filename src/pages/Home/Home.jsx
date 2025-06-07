import React, { useEffect, useRef } from 'react';
import './home.css';
import gsap from 'gsap';

function Home({ref}) {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = ref; // Pour observer toute la section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({ ease: "power2.out" });

          tl.fromTo(h1Ref.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
            .fromTo(h2Ref.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
            .fromTo(pRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");

          gsap.fromTo(imageRef.current,
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power2.out" });

          observer.unobserve(containerRef.current); // Stopper après la 1ère animation
        }
      },
      { threshold: 0.2 } // Déclenche quand 20% est visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div className='home' ref={containerRef}>
      <div className="info">
        <h1 ref={h1Ref}>Mohamed SANOGO</h1>
        <h2 ref={h2Ref}>Développeur Full Stack</h2>
        <p ref={pRef}>
          Passionné par le développement web et mobile, je conçois des solutions modernes avec React, NodeJs, Express et Java.
        </p>
      </div>
      <div className="image" ref={imageRef}>
        <img src="./src/assets/CV-35.jpg" alt="Portrait" />
      </div>
    </div>
  );
}

export default Home;
