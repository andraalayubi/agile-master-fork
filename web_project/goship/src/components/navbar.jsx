import React, { useEffect, useState } from "react";
import { logo1, menu, close } from "../assets";
import { navLinks } from "../constant";
import ButtonSignIn from "./button_SignIn.jsx";
import { Link } from "react-router-dom";

const Navbar = (user) => {
  // console.log("🚀 ~ Navbar ~ loginState:", loginState)
  const [active, setActive] = useState("Home");
  const [iniNavbar, setIniNavbar] = useState(false);
  const loggedUser = user.user;
  console.log("🚀 ~ Navbar ~ loggedUser:", loggedUser)
  const [toggle, setToggle] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setIniNavbar(true);
    } else {
      setIniNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <div className={`fixed z-10 w-full transition duration-300 ${iniNavbar ? 'bg-orange-gradient-navbar' : 'bg-transparent'}`}>
      <nav className="w-full flex sm:px-16 justify-between items-center navbar">
        <img src={logo1} alt="Goship" className="w-[150px] h-[40px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-orange" : "text-dimblack"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <div className="sm:px-10 sm:py-3">
          {loggedUser !== null ? <Link to='/student-profile' state={{ user: loggedUser }}>{loggedUser}</Link> : <ButtonSignIn />} 
        </div>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center px-16">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white text-orange absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-orange" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
             <div className="sm:px-10 sm:py-4">
             {loggedUser !== null ? <Link to='/student-profile' state={{ user: loggedUser }}>{loggedUser}</Link> : <ButtonSignIn />}  
            </div>
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
