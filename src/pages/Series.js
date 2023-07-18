import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../img/copy.png";
import series from "../img/series.png";
import polygon from "../img/polygon.png";
import cnft from "../img/cnft.svg";

function Series() {
  const [text, SetText] = useState(
    "fd8fb9de7c08af1dab160004563d4b2b9a36203888859632c5f27b12"
  );

  const [state, setState] = useState(true);

  const handleCopy = () => {
    console.log("Item is Copied");
  };

  const updateState = () => {
    setState(false);
  };

  return (
    <section className="px-10 md:px-36 mt-5 py-5 w-full mx-auto">
      <div className="space-y-8">
        <h2 className="text-2xl md:text-5xl text-blue font-semibold text-center">
          Mechanimals Series 1
        </h2>
        <p className="text-center text-base md:text-xl">
          The minting for Series 1 is over, you can buy a Series 1 CNFT on a
          marketplace.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-8 mt-10 md:mt-20">
        <a
          href="https://www.jpg.store/collection/mechanimals"
          target="_blank"
          className="btn px-8 py-3 rounded-md border border-blue text-base md:text-2xl font-bold"
        >
          jpg.store
        </a>
        {/* <a
          href="https://cnft.io/marketplace?project=MechAnimals"
          target="_blank"
          className="btn px-8 py-3 rounded-md border border-blue text-base md:text-2xl font-bold tracking-wider"
        >
          <img src={cnft} alt="" />
        </a> */}
        <a
          href="https://cnft.io/marketplace?project=MechAnimals"
          className=" btn px-8 py-3 rounded-md border border-blue text-base md:text-2xl font-bold"
        >
          CNFT.lO
        </a>
      </div>
      <div className="mt-32">
        <div className="space-y-7">
          <h2 className="text-2xl md:text-4xl text-center text-blue font-semibold">
            Series 1 Policy lD
          </h2>
          <div className="flex flex-col items-center space-y-3 mt-5">
            <a
              target="_blank"
              href="https://cardanoscan.io/tokenPolicy/fd8fb9de7c08af1dab160004563d4b2b9a36203888859632c5f27b12"
              className="text-white text-xs md:text-lg text-center"
            >
              {text}
            </a>
            <CopyToClipboard
              className="text-white"
              text={text}
              onCopy={handleCopy}
            >
              <button
                onClick={updateState}
                style={{
                  color: "white",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#2D2D2D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={copy} alt="" />
                <p className="text-xl ml-5">
                  {state ? <>Copy</> : <>Copied</>}
                </p>
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20 flex flex-col items-center md:pb-24">
        <figure>
          <img src={series} alt="" />
        </figure>
        <figure className="">
          <a href="https://cnft.tools/mechanimals" target="_blank">
            <img src={polygon} alt="" />
          </a>
        </figure>
      </div>
    </section>
  );
}

export default Series;
