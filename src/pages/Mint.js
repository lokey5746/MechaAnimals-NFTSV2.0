import React, { useState, useEffect } from "react";
import code from "../img/code3.png";
import copy from "../img/copy.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Mint() {
  const [text, setText] = useState(
    "addr1vydjahdxmwrxvq8d3zhhwuefpe8tpk4tp58d6mydplatcqg3mdehy"
  );
  const [value, setValue] = useState(1);
  const [sum, setSum] = useState(32);

  const [state, setState] = useState(true);

  useEffect(() => {
    const x = value * 32;
    console.log(x);
    setSum(x);
  }, [value]);

  const handleCopy = () => {
    console.log("Item is Copied");
    setState(false);
  };

  return (
    <section className="mt-10 flex flex-col items-center justify-center">
      <div className="px-5 md:px-36 mt-5 py-5 w-full mx-auto">
        <div className="bg-gray-600 shadow-lg rounded-md px-10 py-10 space-y-10 my-14 ">
          <h2 className="text-blue font-bold text-xl md:text-6xl -mt-5 text-center">
            Important
          </h2>
          {/* <h2 className="text-blue font-bold text-xl md:text-6xl text-center">
            Coming Soon!
          </h2> */}
          <p className="text-center text-white text-base md:text-xl">
            You must use a Cardano Shelley-Era wallet such as{" "}
            <a
              href="https://ccwallet.io/"
              className="text-blue"
              target="_blank"
            >
              CC Wallet
            </a>
            ,{" "}
            <a
              href="https://namiwallet.io/"
              className="text-blue"
              target="_blank"
            >
              Nami
            </a>
            ,{" "}
            <a
              className="text-blue"
              href="https://daedaluswallet.io/"
              target="_blank"
            >
              Daedalus
            </a>
            ,{" "}
            <a className="text-blue" href="https://adalite.io/" target="_blank">
              AdaLite
            </a>{" "}
            or{" "}
            <a
              className="text-blue"
              href=" https://yoroi-wallet.com/#/"
              target="_blank"
            >
              Yoroi
            </a>
            .
          </p>
          {/* <p className="text-center text-white text-base md:text-xl">
            Official pre-sale starts on: 03.01.22 17:00 UTC
          </p> */}
          <p className="text-center text-blue uppercase text-base md:text-2xl font-bold">
            Do not send funds from an Exchange !
          </p>
        </div>
        <figure className="flex items-center justify-center mt-10">
          <img src={code} className="h-56" alt="QR Code" />
        </figure>
        <div className="mt-10">
          <div className="w-full">
            <label className="text-white text-base md:text-2xl font-semibold">
              Send to this Address (Click the address to copy).
            </label>
            <CopyToClipboard text={text} onCopy={handleCopy}>
              <p className="px-5 py-5  rounded-md shadow-md mt-5 cursor-pointer text-white text-sm md:text-xl bg-gray-600 flex justify-between">
                {text}
                <div className="flex items-center">
                  <img src={copy} alt="" />
                  <p className="text-xl ml-2">
                    {state ? <>Copy</> : <>Copied</>}
                  </p>
                </div>
              </p>
            </CopyToClipboard>
          </div>
          <div className="mt-10">
            <p className="text-white text-base md:text-2xl font-semibold">
              Select Quantity.
            </p>
            <select
              className="px-5 py-5 rounded-md shadow-md mt-5 cursor-pointer text-white text-base md:text-xl bg-gray-600 w-full outline-none"
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="mt-10">
            <p className="text-white text-base md:text-2xl font-semibold">
              Send the exact amount shown below, 2 ADA will be refunded together
              with your NFT.
            </p>
            <p className="px-5 py-5 rounded-md shadow-md mt-5 text-white text-base md:text-xl bg-gray-600">
              {sum}
            </p>
          </div>
          <h4 className="text-center text-xl md:text-3xl uppercase text-blue font-bold mt-10">
            <span className="text-red">Reminder:</span> do not send funds from
            exchange !
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Mint;
