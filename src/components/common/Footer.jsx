import logo from "../assets/logimg.png";
import { BsApple } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container flex-b">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h5>Download App For FREE</h5>
            <br />

            <div className="app flex">
              <div className="box flex">
                {" "}
                <div>
                  <BsApple />
                </div>
                <div className="text flex">
                  <span></span>
                  <label htmlFor="">Download On The App Store</label>
                </div>
              </div>

              <div className="box flex">
                <div>
                  <AiOutlineGoogle />
                </div>
                <div className="text flex">
                  <span></span>
                  <label htmlFor="">Download On The Google Play</label>
                </div>
              </div>
            </div>
            <br />
            <label htmlFor="">Currently Available In The U.S. And Canada</label>
          </div>
          <div className="right">
            <h3>🖐️ We Would Like To Be In Touch.</h3>
            <br />
            <br />
            <ul className="grid-4">
              <li>
                <h4>Discover</h4>

                <NavLink to="# ">Contact</NavLink>
                <NavLink to="# ">Portfolio</NavLink>
                <NavLink to="# ">Blog</NavLink>
                <NavLink to="# ">Our Team</NavLink>
              </li>
              <li>
                <h4>Learn</h4>

                <NavLink to="blog">Blog</NavLink>
                <NavLink to="# ">Get In Touch</NavLink>
                <NavLink to="# ">FAQ</NavLink>
                <NavLink to="# ">Latest News</NavLink>
              </li>
              <li>
                <h4>Products</h4>

                <NavLink to="# ">Shop</NavLink>
                <NavLink to="# ">Pricing</NavLink>
                <NavLink to="# ">Blog</NavLink>
                <NavLink to="# ">Landing</NavLink>
              </li>
              <li>
                <h4>Company</h4>

                <NavLink to="# ">About Us</NavLink>
                <NavLink to="# ">Contact</NavLink>
                <NavLink to="# ">Reviews</NavLink>
                <NavLink to="# ">Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
