import React from 'react';

export default function Profile() {
  return (
    <section id="profile">
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="100">Profile</h1>
        <h2 data-aos="fade-up" data-aos-delay="200">Your next Developer</h2>
        <hr data-aos="zoom-in" data-aos-delay="300" />

        <div className="row">
          {/* About me */}
          <div className="col-md-4 col-12" data-aos="fade-right" data-aos-delay="400">
            <h3>About me</h3>
            <p>
              I'm a  {' '}
              <a
                href="https://www.planview.com/products-solutions/products/adaptivework/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#159fdd', fontWeight: 'bold' }}
              >
                Planview AdaptiveWork (formerly Clarizen)
              </a>{' '}
              expert with a strong background in project management automation, custom workflows, data migration and support . I’ve led complex implementations across Latin America and Europe, helping companies optimize their project delivery processes.
            </p>
            <p>
              I'm also a creative and resourceful front-end web developer, passionate about building clean, functional, and visually engaging websites. Currently expanding my skills in back-end development to become a full-stack developer — with a particular interest in AI and modern JavaScript frameworks.
            </p>
            <p>
              My goal is to join an international team where I can solve meaningful problems and grow alongside talented people.
            </p>
          </div>

          {/* Foto */}
          <div
            className="col-md-4 meio col-12 text-center"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img src="imagens/circle-tomas.png" id="tomas-circle" alt="Tomás Buk" />
          </div>

          {/* Details */}
          <div className="col-md-4 col-12" data-aos="fade-left" data-aos-delay="700">
            <h3>Details</h3>
            <p>
              <b>Name:</b><br />
              Tomás Buk de Araujo<br />
              <b>Age:</b><br />
              31<br />
              <b>Location:</b><br />
              São Paulo, Brazil
            </p>
            <p>
            <b>GitHub</b><br />
              <a href='https://github.com/tombuk94' target='blank'>https://github.com/tombuk94</a>
            </p>
             <p>
            <b>Linkedin</b><br />
              <a href='www.linkedin.com/in/tomasbukaraujo' target='blank'>www.linkedin.com/in/tomasbukaraujo</a>
            </p>
             <p>
            <b>CV</b><br/>
              <a href='CV/curriculo_tomas_buk_pt.pdf' target='blank'><img src="imagens/brasil.webp" width = "30px"></img> Portuguese</a>
              <br></br><br></br>
              <a href='CV/curriculo_tomas_buk_en.pdf' target='blank'><img src="imagens/eng.jpg" width="30px"></img> English</a>
            </p>          
          </div>
        </div>
      </div>
    </section>
  );
}
