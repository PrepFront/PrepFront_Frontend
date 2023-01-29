import Link from "next/link";
import React from "react";

const NavItem = (props) => {
  return (
    <Link legacyBehavior href={props.href}>
      <a
        className={`
          nav__link ${props.active ? "active" : ""}
      `}
      >
        {props.text}
      </a>
    </Link>
  );
};

export default NavItem;
