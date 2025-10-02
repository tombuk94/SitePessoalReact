import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container">
        <h1>Experiences</h1>

        <p data-aos="fade-up" data-aos-delay="300">
          “Protons give an atom its identity, electrons its personality.”
          <br />
          - Bill Bryson, A Short History of Nearly Everything
        </p>

        <hr data-aos="zoom-in" data-aos-delay="400" />

        <h3 data-aos="fade-up" data-aos-delay="500">Educations</h3>

        {/* Highschool */}
        <div className="row" data-aos="fade-right" data-aos-delay="600">
          <div className="col-md-6 offset-md-2 col-12">
            <b>Highschool</b>
          </div>
          <div className="col-md-4 col-12">
            <h4>
              <FontAwesomeIcon icon={faCanadianMapleLeaf} /> Colégio Santa Cruz
            </h4>
            <p className="left">2000-2012</p>
          </div>
        </div>

        {/* Bachelor */}
        <div className="row" data-aos="fade-right" data-aos-delay="700">
          <div className="col-md-6 offset-md-2 col-12">
            <b>Bachelor - Computer Science</b>
          </div>
          <div className="col-md-4 col-12">
            <h4>
              <img src="imagens/mack.png" id="logo-mack" alt="Mackenzie University Logo" />{' '}
              Mackenzie University
            </h4>
            <p className="left">2015-2021</p>
          </div>
        </div>

        {/* Web Dev Course */}
        <div className="row" data-aos="fade-right" data-aos-delay="800">
          <div className="col-md-6 offset-md-2 col-12">
            <b>Complete course of web development</b>
          </div>
          <div className="col-md-4 col-12">
            <h4>Imedia Brasil</h4>
            <p className="left">01/2018 - 07/2018</p>
          </div>
        </div>

        {/* Adobe Course */}
        <div className="row" data-aos="fade-right" data-aos-delay="900">
          <div className="col-md-6 offset-md-2 col-12">
            <b>Photoshop 2020 / Illustrator 2020</b>
          </div>
          <div className="col-md-4 col-12">
            <h4>Adobe Package</h4>
            <p className="left">09/2019 - 04/2020</p>
          </div>
        </div>
        {/* Alura */}
            <div className="row" data-aos="fade-right" data-aos-delay="900">
          <div className="col-md-6 offset-md-2 col-12">
            <b>Career Front-end React Development</b>
          </div>
          <div className="col-md-4 col-12">
            <h4>Alura</h4>
            <p className="left">In course</p>
          </div>
        </div>

        <hr data-aos="zoom-in" data-aos-delay="1000" />

        <h3 data-aos="fade-up" data-aos-delay="1100">Careers</h3>

        {/* TWRT */}
        <div className="row" data-aos="fade-left" data-aos-delay="1200">
          <div className="col-md-4 col-12">
            <a href="https://twrt.com.br/" target="_blank" rel="noopener noreferrer">
              <img src="imagens/Logo - TWRT.png" id="evoluservices-logo" alt="TWRT Logo" />
              <br />
            </a>
            <p className="left">02/2021 - 02/2025</p>
          </div>

          <div className="col-md-8 col-12">
            <b>Consultant and Developer</b>
            <p className="left">
              Consultant and Developer at TWRT (Planview Partner), leading end-to-end implementations of AdaptiveWork (Clarizen) for enterprise clients across Latin America and Europe.
               Specialized in workflow automation, data migration, custom dashboards, and validation rules, helping companies streamline project management and decision-making. 
               Acted as both Technical Consultant and Project Manager, delivering solutions on time while training and supporting users in English and Spanish.
            </p>
          </div>

          {/* Evoluservices */}
          <div className="col-md-4 col-12" data-aos="fade-left" data-aos-delay="1300">
            <a href="https://br.evoluservices.com/" target="_blank" rel="noopener noreferrer">
              <img src="imagens/evoluservices-logo.png" id="evoluservices-logo" alt="Evoluservices Logo" />
              <br />
            </a>
            <p className="left">10/2019 - 04/2020</p>
          </div>

          <div className="col-md-8 col-12" data-aos="fade-left" data-aos-delay="1350">
            <b>Intern - Marketing Web Developer</b>
            <p className="left">
              Marketing Web Developer Intern, responsible for building responsive commercial websites and creating visual assets (banners, arts, layouts) aligned with brand identity.
                 Wrote SEO-optimized blog posts, improving visibility and engagement, and conducted competitive analysis to support marketing strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
