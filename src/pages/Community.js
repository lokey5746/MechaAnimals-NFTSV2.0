import React from "react";
import community from "../img/community.png";

function Community() {
  return (
    <section id="community" className="md:mb-60">
      <div className="px-10 md:px-36 mt-10 py-5 w-full mx-auto flex flex-col items-center space-y-20">
        <div className="space-y-5">
          <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
            Join our Community
          </h3>
          <p className="text-white text-sm md:text-xl font-semibold text-center">
            Join our community and keep up with all the latest news and
            announcements and don’t miss our drop.
          </p>
        </div>
        <a
          href="http://discord.gg/HunVNAFW5N"
          target="_blank"
          className="bg-blue text-black  px-10 py-4 rounded-md font-bold "
        >
          JOlN OUR DlSCORD
        </a>
      </div>
    </section>
  );
}

export default Community;
