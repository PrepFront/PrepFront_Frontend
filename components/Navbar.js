import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import menu from "../assets/menu.svg"
import Link from "next/link";
import NavItem from "./NavItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MENU_LIST = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Our Experts",
    href: "/experts",
  },
  {
    text: "About us",
    href: "/about",
  },
  {
    text: "Contact us",
    href: "/contact",
  },
];

const Navbar = ({activeIdx}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="nav">
        <Link href="/" className="nav__logo">
          <Image src={Logo} alt="LOGO" width={173} height={45} />
        </Link>

        {/* //have to currently work upon implementing responsive drawer */}
        <div className="nav__menu-bar lg:hidden">
          <button onClick={toggleDrawer}><Image src={menu} width={20} height={20}></Image></button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            className="drawer"
          >
            <div className="drawer__menu-items">
              {MENU_LIST.map((menu, idx) => {
                return (
                  <div key={menu.text}>
                    <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                );
              })}
            </div>
          </Drawer>
        </div>

        <div className="nav__menu-list hidden lg:flex">
          {MENU_LIST.map((menu, idx) => {
            return (
              <div onClick={() => setActiveIdx(idx)} key={menu.text}>
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
