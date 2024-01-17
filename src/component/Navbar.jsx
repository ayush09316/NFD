import twitter from "../assets/navbar/twitter.svg";
import logoImage from "../assets/navbar/logoImage.svg";
import discord from "../assets/navbar/discord.svg";
import Menu from "../assets/navbar/Menu.svg";
import logo from "../assets/navbar/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full fixed pt-4 pb-4 top-0 flex justify-center opacity-100 z-[1000]">
      <div className="flex pl-9 pr-9 justify-between items-center h-[75px] xl:bg-white xs:bg-none ml-6 w-full mr-6 rounded-[30px] max-w-[1440px] ">
        <div className="flex gap-6 items-center ">
          <img src={logoImage} alt="logo"  />
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="xl:flex xs:hidden  gap-5 font-medium ">
            <li className="nav-text ">
              <a href="#about">About</a>
            </li>
            <li className="nav-text  ">
              <a href="#aggregator">Aggregator</a>
            </li>
            <li className="nav-text ">
              <a href="#feature">Features</a>
            </li>
            <li className="nav-text">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="nav-text ">
              <a href="#contact-us">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="xl:flex xs:hidden items-center gap-5  ">
          <img src={discord} alt="discord"  />
          <img src={twitter} alt="twitter" />
        </div>
        <div className="block xl:hidden">
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
