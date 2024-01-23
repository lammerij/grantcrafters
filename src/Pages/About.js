import React from "react";
import "./About.css";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src="" alt="profile pic" />
        <div className="col-2">
          <h2 className="text-white">
            <span>ABOUT</span>
          </h2>

          <span className="line"></span>
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-white text-lg">
              Welcome to Grant Crafters! I'm David J. Portalatin, the founder.
              We specialize in assisting public service organizations,
              businesses, and individuals through the entire grant
              cycle—research, cultivating, writing, and reporting. Our approach
              is personable, collaborative, and fueled by a genuine desire to
              see communities flourish. Join us at Grant Crafters on this
              exciting transformational journey, where together, we build
              brighter futures, stronger institutions, and more connected
              communities. Let's shape a better tomorrow—one grant at a time.
            </p>
            <div className="py-5 text-center">
              <div container max-w-screen-lg mx-auto>
                <div className="flex flex-wrap justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/david-j-p-66812847/"
                    target="blank"
                  >
                    <FaLinkedin
                      className="bg-white-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-sky-700"
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
