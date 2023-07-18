import React from "react";
import logo from "../img/logo2.png";
import { links, social } from "../handler/navData";
import circuit from "../img/footer.png";

function Footer() {
  return (
    <footer className="relative">
      <div className="px-10 md:px-36 mt-5 py-10 w-full mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <figure>
              <img src={logo} alt="Logo" className="h-14 md:h-20" />
            </figure>
            <div className="space-y-3">
              <p className="text-white text-sm md:text-xl">
                Terms & Conditions
              </p>
              <p className="text-white text-sm md:text-xl">
                Copyright © 2021 MechAnimals. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="hidden md:block space-y-2 mt-14">
            <h2 className="text-white text-sm md:text-xl">Follow Us</h2>
            <ul className="flex space-x-4">
              {social.slice(0, 3).map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <figure className="" key={id}>
                    <a href={url} target="_blank">
                      <img className="h-8" src={icon} alt="Instagram" />
                    </a>
                  </figure>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <figure className="hidden md:inline-block">
        <img
          src={circuit}
          alt=""
          className="bottom-0 opacity-60 top-5 circuit"
        />
      </figure>
    </footer>
  );
}

export default Footer;
