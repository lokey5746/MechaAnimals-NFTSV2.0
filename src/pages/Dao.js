import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../img/copy.png";
import gif from "../img/gif.gif";
import cnft from "../img/cnft.svg";

function Dao() {
  const [text, SetText] = useState(
    "1fd6e3b849e864206e24b9fe83eef31837956337951da28fe36087ba"
  );

  const [state, setState] = useState(true);

  const handleCopy = () => {
    console.log("Item is Copied");
  };

  const updateState = () => {
    setState(false);
  };

  return (
    <section className="px-10 md:px-36 mt-5 py-5 w-full mx-auto space-y-4 md:space-y-8">
      <div className="space-y-24">
        <div className="space-y-5">
          <h2 className="text-2xl md:text-5xl text-blue font-semibold text-center">
            MechAnimals DAO
          </h2>
          <p className="text-center text-base md:text-xl">
            All owners of the series 1 have received an airdrop. The airdrop is
            a GlF that guarantees access to the MechAnimal "Member Club".
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl md:text-3xl text-blue font-semibold">
            What is the Member Club?
          </h3>
          <p className="text-base md:text-xl text-justify">
            We, as founders, want the grassroots community to be involved in
            other important decisions as the project moves forward. The airdrop
            becomes a governance token of sorts. When you are in possession of
            the token, you can participate in votes and proposals that affect
            the whole MechAnimals project. ln addition, holders of the "Member
            Club CNFTs" will get discounts on upcoming merchandise products.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-3xl text-blue font-semibold">
            How to get your Discord Role for voting:
          </h2>
          <ul className="text-base md:text-xl list-decimal px-4 space-y-5">
            <li className="mt-4">
              Go to{" "}
              <a
                href="https://www.cnftbot.com/"
                target="_blank"
                className="text-blue"
              >
                {" "}
                https://www.cnftbot.com/
              </a>
            </li>
            <li>Click the "Link Wallet" button in the top-left corner.</li>
            <li>
              You will be asked to login via Discord and authorize access to
              some basic information about your login: Username, avatar, and
              banner.
            </li>
            <li>
              You will be asked to send a "tracker transaction". Copy the
              tracker amount (will always be 4.xxxxxx) and send that amount from
              your wallet to EITHER:
              <ul className="text-base md:text-xl list-disc px-4 space-y-5">
                <li>
                  One of your OWN wallet addresses. This is called an
                  intra-wallet transaction and will only cost you dust fees.
                </li>
                <li>Connect using dApp Connector Wallet.</li>
              </ul>
            </li>
            <li>
              Copy the transaction ID of your "tracker transaction" and paste it
              in the text box provided. Click "Validate".
            </li>
            <li>
              You should now be all set! Please allow up to 4 hours for your
              roles to show up.{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-24">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-5xl text-blue font-semibold text-center">
              Series 1 Member Club
            </h2>
            <figure>
              <img className="h-96" src={gif} alt="" />
            </figure>
          </div>
          <div className="space-y-7">
            <h2 className="text-2xl md:text-5xl text-center text-blue font-semibold">
              Member Club Policy lD
            </h2>
            <div className="flex flex-col items-center space-y-3 mt-5">
              <a
                target="_blank"
                href="https://cardanoscan.io/tokenPolicy/1fd6e3b849e864206e24b9fe83eef31837956337951da28fe36087ba"
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
          <div className="space-y-7  md:pb-40">
            <h2 className="text-xl md:text-3xl text-blue font-semibold text-center">
              You can buy a « Member Club » NFT on a Marketplace.
            </h2>
            <div className="flex items-center justify-center space-x-8">
              <a
                href="https://www.jpg.store/collection/mechanimalss1memberclub"
                target="_blank"
                className="btn px-8 py-3 rounded-md border border-blue text-base md:text-2xl font-bold"
              >
                jpg.store
              </a>
              {/* <a
                href="https://cnft.io/marketplace?project=MechAnimalsSeries1MemberClub"
                target="_blank"
                className="btn px-8 py-3 rounded-md border border-blue text-base md:text-2xl font-bold"
              >
                <img src={cnft} alt="CNFT Tools" />
              </a> */}
              <a
                href="https://cnft.io/marketplace?project=MechAnimalsSeries1MemberClub"
                className="btn px-8 py-3 rounded-md border border-blue text-base md:text-2xl font-bold"
              >
                CNFT.lO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dao;
