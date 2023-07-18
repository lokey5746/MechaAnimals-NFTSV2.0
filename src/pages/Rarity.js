import React, { useState } from "react";
import rarityData from "../handler/rarityData";
import { Image } from "cloudinary-react";

function Rarity() {
  const [data, setData] = useState(rarityData);
  const [value, setValue] = useState(0);

  const { image, name, rarity, title } = data[value];
  return (
    <section className="px-10 md:px-36 mt-5 py-5 w-full mx-auto">
      <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
        Rarity
      </h3>
      <div className="jobs-center">
        {/* job info */}
        <div className="tabpanel border border-blue md:max-w-4xl mx-auto my-10 py-5 species">
          <article className="grid grid-cols-3 md:grid-cols-5 gap-5">
            {rarity.map((duty, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <h2>{duty.title}</h2>
                  {/* <img src={duty.image} alt="" /> */}
                  <Image cloudName="dxvjtxvec" publicId={duty.image} />
                  <p>{duty.value}</p>
                </div>
              );
            })}
          </article>
        </div>
        <div className="flex flex-col items-center pb-5 space-y-5">
          <h2 className="text-blue font-semibold text-2xl md:text-5xl text-center">
            Species
          </h2>
          <p className="text-base md:text-xl">
            Click on any Mechanimal to view their rarity.
          </p>
        </div>
        {/* btn container */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10">
          {data.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`flex flex-col items-center ${
                  index === value && "active__btn"
                }`}
              >
                <img src={item.image} alt="" />
                <h3 className="uppercase font-semibold">{item.name}</h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Rarity;
