import React from 'react';
import rightArrow from '../../img/generalImage/righ-arrow.png';

export default function ArrowGhostCardSection() {
  return (
    <>
      <section>
        <section className="whychooseus_section">
          <div className="AboutUs_WhyChooseUs_Card cursor">
            <div className="AboutUs_WhyChooseUs_Card-Circles blue"></div>

            <h2 className="poppins_bold_700">Wear Masks</h2>
            <p className="poppins_regular_400">
              We request all our audience to wear masks and protect themselves
              and those around them.
            </p>
            <div className="arrowIconContainer">
              <img src={rightArrow} alt="right arrow logo" />
            </div>
          </div>

          <div className="AboutUs_WhyChooseUs_Card cursor">
            <div className="AboutUs_WhyChooseUs_Card-Circles green"></div>

            <h2 className="poppins_bold_700">Maintain Distance</h2>
            <p className="poppins_regular_400">
              Everyone is requested to maintain physical distance between those
              around them for safety measures.
            </p>
            <div className="arrowIconContainer">
              <img src={rightArrow} alt="right arrow logo" />
            </div>
          </div>
          <div className="AboutUs_WhyChooseUs_Card cursor">
            <div className="AboutUs_WhyChooseUs_Card-Circles gold"></div>

            <h2 className="poppins_bold_700">Get Help!</h2>
            <p className="poppins_regular_400">
              If you develop any covid symptoms, contact our helpline and get
              medical help as soon as possible.
            </p>
            <div className="arrowIconContainer">
              <img src={rightArrow} alt="right arrow logo" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
