import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

function Hero() {
  return (
    <section id="hero" className="relative">
      <figure>
        {/* <img src={hero} alt="Hero Image" className="w-full" /> */}
        <Image
          cloudName="ds4kjgovs"
          publicId="https://res.cloudinary.com/ds4kjgovs/image/upload/v1644913011/mechanimals/hero_wtjybc.png"
          className="w-full"
        />
      </figure>
      <div className="absolute px-7 md:px-20 py-5 md:py-10 border border-blue rounded-lg box">
        <div className="flex flex-col justify-center items-center space-y-5 md:space-y-8">
          <div>
            <h2 className="text-blue text-sm md:text-3xl font-semibold text-center">
              MECHANlMALS SERlES 2 WHlTELlST SALE
              {/* <h2 className="text-blue text-sm md:text-base font-semibold">
              03.01.22 17:00 utc
            </h2> */}
            </h2>
            <h2 className="text-sm md:text-4xl text-white text-center font-semibold">
              March 5, 17:00 UTC
            </h2>
          </div>

          <div>
            <h3 className="text-blue text-sm md:text-3xl text-center font-semibold">
              PUBLlC SALE
            </h3>
            <h3 className="text-sm md:text-4xl text-white text-center font-semibold">
              March 6, 17:00 UTC
            </h3>
          </div>

          {/* <Link
            className="bg-blue rounded-md text-base md:text-xl font-bold px-3 md:px-10 py-2 md:py-3 uppercase"
            to="/mint"
          >
            Mint here
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
