import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export default function Abilities() {
  return (
    <section id="abilities">
      <h1 data-aos="fade-down">Abilities</h1>

      <p data-aos="fade-up" data-aos-delay="300">
        “Life without knowledge is death in disguise.”
        <br />- Talib Kweli
      </p>

      <div className="container">
        <hr data-aos="zoom-in" data-aos-delay="400" />
        <h3 data-aos="fade-up" data-aos-delay="500">Skills</h3>

        <div className="row" data-aos="fade-left" data-aos-delay="600">
          <div className="col-md-6">
            <ul>
              {[
                { skill: 'Bootstrap', stars: 5 },
                { skill: 'CSS(3)', stars: 5 },
                { skill: 'HTML(5)', stars: 5 },
                { skill: 'MySQL', stars: 4 },
                { skill: 'PHP', stars: 4 },
                { skill: 'XML', stars: 4 },
                { skill: 'jQuery', stars: 4 },
                { skill: 'React', stars: 4 },
              ].map(({ skill, stars }) => (
                <li key={skill}>
                  <span className="skill">{skill}</span>{' '}
                  <span className="estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={i < stars ? faStarSolid : faStarRegular} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <ul>
              {[
                { skill: 'Java', stars: 4 },
                { skill: 'JavaScript', stars: 4 },
                { skill: 'Object Orientation', stars: 4 },
                { skill: 'SEO', stars: 4 },
                { skill: 'UML', stars: 4 },
                { skill: 'WordPress', stars: 4 },
                { skill: 'MVC Pattern', stars: 3 },
                { skill: 'Node', stars: 3 },
              ].map(({ skill, stars }) => (
                <li key={skill}>
                  <span className="skill">{skill}</span>{' '}
                  <span className="estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={i < stars ? faStarSolid : faStarRegular} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr data-aos="zoom-in" data-aos-delay="700" />
        <h3 data-aos="fade-up" data-aos-delay="800">Languages</h3>

        <div className="row" data-aos="fade-left" data-aos-delay="900">
          <div className="col-md-6">
            <ul>
              <li>
                <span className="skill">Portuguese</span>{' '}
                <span className="estrelas">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={faStarSolid} />
                  ))}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <span className="skill">English</span>{' '}
                <span className="estrelas">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={i < 4 ? faStarSolid : faStarRegular} />
                  ))}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <span className="skill">Spanish</span>{' '}
                <span className="estrelas">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={i < 4 ? faStarSolid : faStarRegular} />
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr data-aos="zoom-in" data-aos-delay="1000" />
        <h3 data-aos="fade-up" data-aos-delay="1100">Tools</h3>

        <div className="row" data-aos="fade-left" data-aos-delay="1200">
          <div className="col-md-6">
            <ul>
              {[
                { skill: 'MS Office', stars: 5 },
                { skill: 'Windows', stars: 5 },
                { skill: 'Firefox', stars: 5 },
                { skill: 'Visual Studio Code', stars: 5 },
                { skill: 'Sublime Text', stars: 4 },
              ].map(({ skill, stars }) => (
                <li key={skill}>
                  <span className="skill">{skill}</span>{' '}
                  <span className="estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={i < stars ? faStarSolid : faStarRegular} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              {[
                { skill: 'Adobe Photoshop', stars: 4 },
                { skill: 'Adobe Illustrator', stars: 4 },
                { skill: 'MAC', stars: 3 },
                { skill: 'Linux', stars: 3 },
                { skill: 'Git/Git flow', stars: 3 },
              ].map(({ skill, stars }) => (
                <li key={skill}>
                  <span className="skill">{skill}</span>{' '}
                  <span className="estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={i < stars ? faStarSolid : faStarRegular} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
