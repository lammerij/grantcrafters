import React from "react";
import "./About.css";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img
          src="/F348BE51-66D5-4EDF-8CF7-C4D76907BDD9.jpg"
          width={450} height={450}
          alt="profile pic"
        />
        <div className="col-2">
          <h2 className="text-white">
            <span>ABOUT</span>
          </h2>

          <span className="line"></span>
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-white text-md text-wrap">
              David J. Portalatin, a dynamic force in development leadership, is
              recognized for his exceptional talent in engaging resources and
              donors for mission-oriented organizations. With a master's degree
              in organizational management from NYU and a background in
              economics and sociology from the City University of New York,
              David's grant writing journey emerged from a passion for
              songwriting, seamlessly blending creativity with strategic impact.
              His career includes impactful roles at renowned foundations such
              as the Heron Foundation and Good+Foundation, as well as serving as
              an associate consultant at the Nonprofit Finance Fund. With
              a collaborative approach, he cultivates genuine relationships
              within organizations, showcasing both creative flair and strategic
              prowess in the dynamic realms of grant writing and development
              leadership.
            </p>
            <div className="py-5 text-center">
              <div container max-w-screen-lg mx-auto>
                <div className="flex flex-wrap justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/jonathanlammering/"
                    target="blank"
                  >
                    <FaLinkedin
                      className="bg-black-400 p-2 font-semibold text-black inline-flex items-center space-x-2 rounded-full hover:bg-sky-700"
                      size={50}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
