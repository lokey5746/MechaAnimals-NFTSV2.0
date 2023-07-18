import React, { useState } from "react";
import earth from "../img/Earth.png";

function RoadMap() {
  return (
    <section id="roadmap">
      <div className="px-10 md:px-36 mt-24 py-5 w-full mx-auto relative">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center mb-5">
          Roadmap
        </h3>
        <div>
          <div className="py-10 flex flex-col space-y-2">
            <div className="w-1 h-24 bg-blue shadow-md inset-0"></div>
            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-blue rounded-full h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-blue shadow-md inset-0 mt-2"></div>
              </div>
              <div className="p-3 md:p-6 -mt-8">
                <h2 className="text-2xl md:text-4xl text-primary font-bold font-Kalam pt-1">
                  January 2022
                </h2>
                <ul className="text-white p-5 mt-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-2 list-disc px-5 text-lg md:text-2xl ">
                    <li>Launching MechAnimals Project Website </li>
                    <li>Create Discord Server</li>
                    <li>Minting MechAnimals Series 1 </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-blue rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-blue shadow-md inset-0 mt-2 "></div>
              </div>
              <div className="p-3 md:p-6">
                <h2 className="text-2xl md:text-4xl text-primary font-bold font-Kalam pt-1">
                  February 2022
                </h2>
                <ul className="text-white p-5 mt-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-2 list-disc px-5 text-lg md:text-2xl">
                    <li>Limited Edition Airdrop for all Series 1 Holders </li>
                    <li>
                      MechAnimals Project moving towards a DAO with voting{" "}
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white shadow-md inset-0 mt-2 "></div>
              </div>
              <div className="p-3 md:p-6">
                <h2 className="text-2xl md:text-4xl text-primary font-bold font-Kalam pt-1">
                  March 2022
                </h2>
                <ul className="text-white p-5 mt-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-2 list-disc px-5 text-lg md:text-2xl">
                    <li>MechAnimals Series 2 Minting </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white shadow-md inset-0 mt-2 "></div>
              </div>
              <div className="p-3 md:p-6">
                <h2 className="text-2xl md:text-4xl text-primary font-bold  pt-1">
                  April 2022
                </h2>
                <ul className="text-white p-5 mt-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-2 list-disc px-5 text-lg md:text-2xl">
                    <li>
                      Presentation of Merchandise with exclusive deals for
                      MechAnimal Holders{" "}
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white shadow-md inset-0 mt-2 "></div>
              </div>
              <div className="p-3 md:p-6">
                <h2 className="text-2xl md:text-4xl text-primary font-bold pt-1">
                  June 2022
                </h2>
                <ul className="text-white p-5 mt-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-2 list-disc px-5 text-lg md:text-2xl">
                    <li>Limited Edition Airdrop for all Series 2 Holders</li>
                  </ul>
                </ul>
              </div>
            </div>
            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white shadow-md inset-0 mt-2 line2"></div>
              </div>
              <div className="p-3 md:p-6">
                <h2 className="text-2xl md:text-4xl text-primary font-bold font-Kalam pt-1">
                  July 2022
                </h2>
                <ul className="text-white p-5 mt-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-2 list-disc px-5 text-lg md:text-2xl">
                    <li>
                      lmplementation of a MechAnimals Marketplace on our website
                    </li>
                    <li>Collaboration with another CNFT Project </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <figure className="h-20 hidden md:block">
          <img
            className="absolute top-1/3 right-0 opacity-60"
            src={earth}
            alt="Earth Image"
          />
        </figure>
      </div>
    </section>
  );
}

export default RoadMap;
