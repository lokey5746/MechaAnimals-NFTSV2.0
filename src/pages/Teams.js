import React, { useState } from "react";
import teamData from "../handler/teamData";
import gear from "../img/gear2.png";
import { Image } from "cloudinary-react";

function Teams() {
  const [teams, setTeams] = useState(teamData);
  return (
    <section id="team" className="relative">
      <div className="px-10 md:px-36 mt-5 py-5 w-full mx-auto">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
          Mecha Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {teams.slice(0, 8).map((card) => (
            <figure key={card.id} className="flex flex-col">
              {/* <img src={card.image} alt="Team Image" /> */}
              <Image cloudName="ds4kjgovs" publicId={card.image} />
              <h3 className="text-textgreen text-xl md:text-xl text-white font-semibold mt-3 text-center">
                {card.name}
              </h3>
              <p className="text-base md:text-base text-blue font-semibold text-center">
                {card.role}
              </p>
            </figure>
          ))}
        </div>
      </div>
      <figure className="hidden md:block">
        <img
          src={gear}
          alt="Rocket"
          className="absolute left-0 -top-28 opacity-60"
        />
      </figure>
    </section>
  );
}

export default Teams;
