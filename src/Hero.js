import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black">
            We Service Grant Writing for
          </p>
        </div>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-blue-700"
          strings={[
            "Nonprofits",
            "Artists",
            "Educational Institutions",
            "Businesses",
            "Researchers",
            "Government Agencies",
          ]}
          typeSpeed={200}
          backSpeed={140}
          loop
        />

        <button className="bg-[#090909] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
