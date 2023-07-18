import React, { useState } from "react";
import faqData from "../handler/faqData";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import up from "../img/up.png";
import down from "../img/down.png";

function Faq() {
  const [data, setData] = useState(faqData);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active closed it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <section id="faq">
      <div className="px-10 md:px-36 mt-5 py-5 w-full mx-auto">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
          FAQS
        </h3>
        <div className="mt-10">
          <div key={item.id} onClick={() => toggle(index)} className="">
            <div className="mb-6 md:mb-10">
              <div className="cursor-pointer">
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-lg md:text-2xl">
                    {item.question}
                  </h2>
                  <span className="text-blue font-bold">
                    {clicked === index ? (
                      <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                    ) : (
                      <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                    )}
                  </span>
                </div>
                {clicked === index ? (
                  <div className="mt-4 bg-blue text-black rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 font-bold text-base md:text-xl">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
