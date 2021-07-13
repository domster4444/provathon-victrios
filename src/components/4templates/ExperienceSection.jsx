//?? __OUR VISION
import React from 'react';

import experienceSectionRightDivision from '../../img/generalImage/experienceSection-rightDivision.png';

export default function ExperienceSection() {
  return (
    <>
      <main id="ExperienceSection">
        <div className="containerCenter">
          <div className="contentBlock">
            <div className="leftDivision">
              <div className="leafCircle purple"></div>
              <h2 className="poppins_light_300">Our Vision </h2>
              <p className="poppins_light_300">
                Keeping in mind, all these issues regarding covid in Nepal, our
                team has thought of a better way, a better solution for you. As
                you can get every information in a single site from the
                respective sources, we tried to solve all your issue regarding
                the pandemic healthcare support and covid statistics.
              </p>
              <a href="https://google.com">Learn More -</a>
            </div>

            <div className="rightDivision">
              <img
                src={experienceSectionRightDivision}
                alt="representaion of an illustator"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
