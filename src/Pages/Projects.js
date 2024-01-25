import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="text-white">
          <span>PROJECTS</span>
        </h2>
        <div class="text-center">
          <ul class="list-decimal text-white">
            <li>
              More than $2,000,000 raised through private and corporate
              foundations including Bank of America Charitable Foundation,
              Credit Suisse of Americas Foundation, Con Edison Foundation, and
              Hyde and Watson Foundation
            </li>
          </ul>
          <ul class="list-none text-white">
            <li>
              $900,000 secured through the Shuttered Venue Operators Grant via
              the U.S Small Business Association
            </li>
          </ul>
          <ul class="list-disc text-white">
            <li>
              $700,000+ procured through family offices/foundations across the
              country
            </li>
          </ul>
          <ul class="list-disc text-white">
            <li>
              In excess of $300,000 amount raised through Donor Advised Funds
              (DAF) including Fidelity Charitable and Schwab Charitable
            </li>
          </ul>
          <ul class="list-disc text-white">
            <li>
              $200,000 obtained through the September 11th Victims Compensation
              Fund
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
