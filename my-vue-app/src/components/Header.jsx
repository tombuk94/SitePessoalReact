import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    // Carrega particles.js
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 3 },
            line_linked: { 
              enable: true, 
              distance: 150, 
              color: "#ffffff", 
              opacity: 0.2, 
              width: 1 
            },
            move: { 
              enable: true, 
              speed: 3, 
              direction: "none"
            }
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }
            }
          }
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="capa">
      {/* Container do particles - ABSOLUTO sem afetar layout */}
      <div 
        id="particles-js" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1 // Abaixo do conteúdo
        }}
      />

      {/* Seu conteúdo - RELATIVE para manter posição */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, // Acima das partículas
        color: 'white',
        textAlign: 'center',
        width: '100%'
      }}>
        <h1 data-aos="fade-down" data-aos-delay="500">
          Tomás Buk
        </h1>

        <hr data-aos="zoom-in" data-aos-delay="800" />

        <h2 data-aos="fade-up" data-aos-delay="1000">
          Front-end Developer | Project Management & Automation
        </h2>

        
      </div>
      <a href="#profile" className="seta-baixo">
          <i className="fas fa-chevron-down seta-menu"></i>
        </a>
    </section>
  );
}