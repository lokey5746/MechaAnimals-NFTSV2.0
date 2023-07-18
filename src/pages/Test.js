import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Test() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };
  return (
    <section id="faq">
      <div className="px-10 md:px-36 mt-5 py-5 w-full mx-auto">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
          FAQS
        </h3>
        <div className="mt-10">
          <Accordion allowZeroExpanded className="space-y-10">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      When will be the minting of MechAnimals Series 2?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  The Whitelist Sale will be on March 5th 17:00 UTC <br />
                  The Public Sale will be on March 6th 17:00 UTC
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How many MechAnimals Series 2 will be sold?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  There are 10´000 unique MechAnimals Series 2 CNFTs.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How much will the MechAnimals Series 2 NFTs cost?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  The Whiteliste Price will be 30 ADA per NFT <br />
                  The Price for the Public Sale will be 38 ADA per NFT
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How can I join the Whitelist?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  There are 2 ways of joining the Whitelist:
                  <ul className="list-decimal px-8">
                    <li>
                      Hold at least 3 MechAnimals Series 1 until the the of the
                      drop of Series 2
                    </li>
                    <li>
                      Have 20 invites to our{" "}
                      <a
                        className="text-gray"
                        href="http://discord.gg/HunVNAFW5N"
                      >
                        Discord Server
                      </a>
                    </li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      What wallets can I use?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  DO NOT SEND ADA FROM AN EXCHANGE. ADA must be sent from your
                  own Cardano wallet. Such as Nami, Daedalus, ccvault or Yoroi.
                  Be careful of fake wallets!
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      Can I buy more than 1 MechAnimal at the same time?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  Yes, but we want as many people as possible to have a chance
                  to buy a MechAnimal, so only 5 MechAnimals are available per
                  transaction!
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How long does it take to receive my MechAnimal after I
                      send my ADA?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  This will depend on a number of considerations such as network
                  volume and popularity of the project. Please allow for up to a
                  full day to receive a MechAnimal or a refund.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      I sent the wrong amount of ADA, what happens?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  You'll receive a refund minus the transaction fees.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      I ignored your instructions and sent ADA from an exchange.
                      Please help!
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  We're sorry, but there's nothing we can do to help. Your
                  MechAnimal NFT was sent to the exchange. Please contact your
                  exchange.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How can I reach out for assistance?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  Our{" "}
                  <a className="text-gray" href="http://discord.gg/HunVNAFW5N">
                    Discord Server
                  </a>{" "}
                  has a ticket system for assistance. Please submit a ticket
                  providing the details of your problem or concern and we'll try
                  to assist. Do not ask for or accept assistance from anyone via
                  any other channels or means of communication. They are almost
                  all certainly scams to steal your ADA and NFTs.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How can I use my MechAnimal NFT?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                  MechAnimals is a collection of digital artworks created as
                  Non-Fungible Tokens (NFTs) on the Cardano network. When you
                  purchase a MechAnimal CNFT, you own that specific NFT on the
                  Cardano blockchain.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Test;
