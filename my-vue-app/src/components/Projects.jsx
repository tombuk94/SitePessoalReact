import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <h1 data-aos="fade-down">Projects</h1>

      <p data-aos="fade-in">
        “You can do anything you set your mind to.”<br />
        - Benjamin Franklin<br />
        - Talib Kweli
      </p>

      <div className="container">
        <hr data-aos="zoom-in" />

        <div className="row" data-aos="zoom-in">
          <a href="https://br.evoluservices.com/" target="_blank" rel="noopener noreferrer">
            <img src="imagens/projeto-evolu.png" className="box" alt="Projeto Evolu" />
          </a>
        </div>

        <div className="row" data-aos="zoom-in">
          <a href="InstitutoCerebro" target="_blank" rel="noopener noreferrer">
            <img src="imagens/projeto-marcela.png" className="box" alt="Projeto Marcela" />
          </a>
        </div>

        <hr data-aos="zoom-in" />
        <h1 data-aos="fade-down">Landing Pages</h1>

        <div className="row" data-aos="zoom-in">
          <a href="https://finpet.com.br/MetaAzul/" target="_blank" rel="noopener noreferrer">
            <img src="imagens/metaazul.png" className="box" alt="MetaAzul" />
          </a>
        </div>

        <div className="row" data-aos="zoom-in">
          <a href="https://sejaevo.com.br/landparceiros" target="_blank" rel="noopener noreferrer">
            <img src="imagens/evo.png" className="box" alt="Evo Parceiros" />
          </a>
        </div>

        <div className="row" data-aos="zoom-in">
          <a href="https://saudeservice.com.br/landing-ciosp" target="_blank" rel="noopener noreferrer">
            <img src="imagens/ciosp.png" className="box" alt="Ciosp" />
          </a>
        </div>
      </div>
    </section>
  );
}
