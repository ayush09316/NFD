import twitter from "../assets/navbar/twitter.svg";
import logoImage from "../assets/navbar/logoImage.svg";
import discord from "../assets/navbar/discord.svg";
import Menu from "../assets/navbar/Menu.svg";
import { useState } from "react";
import logo from "../assets/navbar/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <nav
      className={`w-full fixed   top-0 flex justify-center opacity-100 z-[1000] ${
        nav ? "bg-[#373145cc] py-0 transition-colors" : "py-4"
      }`}
    >
      <div
        className={`flex px-9 justify-between items-center h-[75px] ${
          nav ? "bg-none text-white" : "xl:bg-white text-slate-600 "
        } w-full mx-6 rounded-[30px] max-w-[1440px] `}
      >
        <div className="flex gap-6 items-center ">
          <img src={logoImage} alt="logo" />
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="xl:flex hidden  gap-5 font-medium ">
            <li className=" p-3 text-base cursor-pointer relative  hover:text-purple-600">
              <a href="#about">About</a>
            </li>
            <li className=" p-3 text-base cursor-pointer relative  hover:text-purple-600">
              <a href="#aggregator">Aggregator</a>
            </li>
            <li className=" p-3 text-base cursor-pointer relative  hover:text-purple-600">
              <a href="#feature">Features</a>
            </li>
            <li className=" p-3 text-base cursor-pointer relative  hover:text-purple-600">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className=" p-3 text-base cursor-pointer relative  hover:text-purple-600">
              <a href="#contact-us">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="xl:flex xs:hidden items-center gap-5  ">
          <img src={discord} alt="discord" />
          <img src={twitter} alt="twitter" />
          <div className={`${nav?'flex gap-[5rem]':'hidden'} `}>
            <button className="relative min-w-[126px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]">
              <div className="button-start"></div>
              <span className="hero-button-main"></span>
              <div className="w-full h-full absolute flex items-center justify-center  z-10 rounded-full text-white">
              &quot;Combine&quot;<br/>
              software

              </div>
              <div className="button-start button-end"></div>
            </button>
            <button className="relative min-w-[110px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]">
              <div className="button-start"></div>
              <span className="hero-button-main"></span>
              <div className="w-full h-full absolute flex items-center justify-center gap-4 z-10 rounded-full text-white">
                Platform
              </div>
              <div className="button-start button-end"></div>
            </button>
          </div>
        </div>
        <div className="block xl:hidden">
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
