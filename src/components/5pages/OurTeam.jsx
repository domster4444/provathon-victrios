import { Redirect } from 'react-router-dom';

import React from 'react';
import telescopeImage from '../../img/ourTeam/telescopeImg.png';

export default function OurTeam(props) {
  console.log(props.isLoggedInProps);
  return (
    <main id="ourTeamPage">
      <section id="heroSection">
        <div>
          <h1 className="poppins_medium_500">Join our Team</h1>
          <h2 className="poppins_regular_400">
            Help us on our quest to make good software even better
          </h2>
          <button className="cursor joinBtn">
            <strong className="poppins_regular_400">JOIN</strong>
          </button>
        </div>
      </section>

      <hr />

      <div className="containerCenter">
        <div className="contentBlock">
          <section id="sectionTwo">
            <div id="leftDivision">
              <img src={telescopeImage} alt="" />
            </div>

            <div id="rightDivision">
              <h3 className="poppins_medium_500">
                Where are you? We may just be there too.
              </h3>
              <p className="poppins_regular_400">
                New York, Dublin, Ann Arbor,
                <br />
                floating on a boat in the Mediterranean Sea, behind
                <br /> that tree: if there’s a good enough internet connection,
                <br /> one of our employees (maybe you) might be there.
                <br />
              </p>
            </div>
          </section>
        </div>
      </div>

      <hr />

      <div className="containerCenter">
        <div className="contentBlock">
          <section id="teamInfoSection">
            <div className="card">
              <div className="leftDivision">
                <div className="sphereDivision">
                  {/* //?team member image is specified as bgImg in css  below is 2nd team member */}
                  <div id="thirdTeamMember" className="teamMember"></div>
                </div>
              </div>
              <div className="rightDivision">
                <p className="poppins_regular_400">
                  rem voluptates assumenda at deleniti molestias sed cumque
                  neque eveniet, dolorum nostrum dicta voluptas voluptate,
                  tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                  officiis quas velit aspernatur. Debitis, impedit vel!
                </p>
                <div className="container">
                  <div className="left poppins_regular_400">
                    <strong>Kritika</strong>
                    <br />
                    <p className="occupation">Bachelor 1st Year</p>
                  </div>
                  <div className="right poppins_medium_500">
                    <a href="#">
                      Read More{' '}
                      <svg
                        className="ArrowLink--arrowLink__svg--3LNWG"
                        viewBox="0 0 15 9"
                      >
                        <path
                          d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="leftDivision">
                <div className="sphereDivision">
                  <div id="thirdTeamMember" className="teamMember"></div>
                </div>
              </div>
              <div className="rightDivision">
                <p className="poppins_regular_400">
                  rem voluptates assumenda at deleniti molestias sed cumque
                  neque eveniet, dolorum nostrum dicta voluptas voluptate,
                  tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                  officiis quas velit aspernatur. Debitis, impedit vel!
                </p>
                <div className="container">
                  <div className="left poppins_regular_400">
                    <strong>Kshitiz</strong>
                    <br />
                    <p className="occupation">Bachelor 1st Year</p>
                  </div>
                  <div className="right poppins_medium_500">
                    <a href="#">
                      Read More{' '}
                      <svg
                        className="ArrowLink--arrowLink__svg--3LNWG"
                        viewBox="0 0 15 9"
                      >
                        <path
                          d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="leftDivision">
                <div className="sphereDivision">
                  <div id="thirdTeamMember" className="teamMember"></div>
                </div>
              </div>
              <div className="rightDivision">
                <p className="poppins_regular_400">
                  rem voluptates assumenda at deleniti molestias sed cumque
                  neque eveniet, dolorum nostrum dicta voluptas voluptate,
                  tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                  officiis quas velit aspernatur. Debitis, impedit vel!
                </p>
                <div className="container">
                  <div className="left poppins_regular_400">
                    <strong>Kizz Hussain</strong>
                    <br />
                    <p className="occupation">Bachelor 1st Year</p>
                  </div>
                  <div className="right poppins_medium_500">
                    <a href="#">
                      Read More{' '}
                      <svg
                        className="ArrowLink--arrowLink__svg--3LNWG"
                        viewBox="0 0 15 9"
                      >
                        <path
                          d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="contacFormSection">
        <div class="container contact-form">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post">
            <h3>Drop Us a Message</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btnContact"
                    value="Send Message"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="txtMsg"
                    class="form-control"
                    placeholder="Your Message *"
                    style={{ width: '100%', height: '150px' }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
