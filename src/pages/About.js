import React from "react";
import gear from "../img/gear1.png";

function About() {
  return (
    <section id="about" className="relative">
      <div className="px-10 md:px-36 mt-5 py-5 w-full mx-auto space-y-4 md:space-y-8">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
          About MechAnimals
        </h3>

        <p className="text-white text-base text-justify md:text-xl">
          MechAnimals is a collection of 10,000 unique Non-Fungible Tokens
          (NFTs) on the Cardano blockchain. The mecha NFTs were inspired by
          Chinese zodiac characters. Check out "Acient History" for more
          information. The project includes two series of MechAnimals. In
          addition to that, MechAnimals will be a DAO project where the
          community can get involved and vote regularly on how the royalty will
          be used.
        </p>
        <p className="text-white text-base text-justify md:text-xl">
          Thank you for your interest in MechAnimals.
          <br />
          Check out our FAQs and Roadmap on this page for more details.
        </p>
      </div>
      <figure className="h-20 hidden md:block">
        <img
          className="absolute top-5 right-0 opacity-60"
          src={gear}
          alt="Earth Image"
        />
      </figure>
    </section>
  );
}

export default About;
