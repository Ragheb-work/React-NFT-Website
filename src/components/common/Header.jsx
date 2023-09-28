import { useState } from "react";
import Logo from "../assets/logo.png";
import { LinkData } from "../assets/data/dummyData";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container flex-b">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex-b-g">
              {LinkData.map((link) => {
                return (
                  <li key={link.id} onClick={() => setOpen(null)}>
                    <NavLink to={link.url}> {link.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="account flex-b-g">
            <button>
              <BiShoppingBag />
            </button>
            <button>Login</button>
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
