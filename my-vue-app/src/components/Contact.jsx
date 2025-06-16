import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-delay="0">Contact</h1>

        <p data-aos="fade-in" data-aos-delay="100">
          “If I had asked people what they wanted, they would have said faster horses.”<br />
          – Henry Ford
        </p>

        <hr data-aos="zoom-in" data-aos-delay="200" />

        <div className="row">
          <div className="col-12 redes text-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href="www.linkedin.com/in/tomasbukaraujo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/tomas.buk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.instagram.com/tomas_buk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="mailto:tomas.buk.araujo@gmail.com?Subject=Título%20da%20mensagem">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
