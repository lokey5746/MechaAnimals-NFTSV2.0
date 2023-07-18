import React, { useState } from "react";
import logo from "../img/logo2.png";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

import { social } from "../handler/navData";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  // const toggleLinks = () => {
  //   setShowLinks(!showLinks);
  // };

  return (
    <header>
      <div className="px-6 md:px-32 mx-auto w-full md:py-2 nav-center">
        <div className="nav-header">
          <figure>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-14 md:h-20" />
            </Link>
          </figure>
          <button onClick={() => setShowLinks(!showLinks)}>
            <AiOutlineMenu className="md:hidden text-blue absolute top-8 md:top-10 right-10 text-2xl cursor-pointer" />
          </button>
        </div>

        <div
          className={`${
            showLinks ? "links-container show-container" : "show-container"
          }`}
        >
          <ul className="links text-lg font-bold uppercase">
            <li className="links">
              <a className="link" href="#about" smooth={true} duration={1000}>
                About
              </a>
            </li>
            <li className="links">
              <a className="link" href="#roadmap" smooth={true} duration={1000}>
                Roadmap
              </a>
            </li>
            <li className="links ">
              <a className="link" href="#faq" smooth={true} duration={1000}>
                FAQs
              </a>
            </li>
            <li className="links uppercase">
              <a className="link" href="#team" smooth={true} duration={1000}>
                Team
              </a>
            </li>
            <li className="links capitalize">
              <Link className="link" to="/series" smooth={true} duration={1000}>
                SERlES 1
              </Link>
            </li>
            <li className="links uppercase">
              <Link className="link" to="/dao" smooth={true} duration={1000}>
                Dao
              </Link>
            </li>
            <li className="block md:hidden">
              <ul className="flex space-x-4">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <figure className="" key={id}>
                      <a href={url} target="_blank">
                        <img className="h-6" src={icon} alt="Instagram" />
                      </a>
                    </figure>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        <div className="social-icons flex items-center space-x-6">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <figure key={id}>
                <a href={url} target="_blank">
                  <img className="" src={icon} alt="Instagram" />
                </a>
              </figure>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
