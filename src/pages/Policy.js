import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../img/copy.png";

function Policy() {
  const [text, SetText] = useState(
    "15c1147389cab92642f5133cdd584eefed9b617bf406d2315e2153e4"
  );

  const [state, setState] = useState(true);

  const handleCopy = () => {
    console.log("Item is Copied");
  };

  const updateState = () => {
    setState(false);
  };
  return (
    <section>
      <div className="px-10 md:px-36 mt-5 py-16 w-full mx-auto">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
          Policy lD
        </h3>
        {/* <h3 className="text-white font-semibold text-2xl md:text-4xl text-center mt-5">
          Coming Soon
        </h3> */}
        <div className="flex flex-col items-center space-y-3 mt-5">
          <a
            target="_blank"
            href="https://cardanoscan.io/tokenPolicy/15c1147389cab92642f5133cdd584eefed9b617bf406d2315e2153e4"
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
              <p className="text-xl ml-5">{state ? <>Copy</> : <>Copied</>}</p>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </section>
  );
}

export default Policy;
