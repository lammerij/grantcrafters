import React from "react";
// import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white" id="hero">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className=" justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black bg-white">
            Welcome To Grant Crafters
          </p>
          <div>
            <p className="text-black bg-white text-med">
              We assist in public service organizations,
              businesses, and individuals through the entire grant
              cycle—research, cultivating, writing, and reporting. 
            </p>
          </div>
        </div>
        <button className="bg-[#090909] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Book a Free Consult
        </button>
      </div>
    </div>
  );
};

export default Hero;
