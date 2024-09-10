import "./navbar.css";
import { useState } from "react";
import logo1 from "./../../assets/images/logo1.gif";
import menu_open from "./../../assets/images/menu_open.svg";
import menu_close from "./../../assets/images/menu_close.svg";
import underline from "./../../assets/images/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function Navbar() {


  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo1} alt="logo" height={150}  className="nav-logo"/>
      <img src={menu_open}   alt="menu_icon" className="nav-mob-open" />
      <ul  className="nav-menu">
        <img src={menu_close}  alt="menu_icon" className="nav-mob-close" />
        <li>
         <AnchorLink className="anchor-link"  href="#home"> <p onClick={() => setMenu("home")}>Home</p></AnchorLink>
          {menu === "home" ? <img src={underline} alt="img" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#about"> <p onClick={() => setMenu("about")}>About me</p></AnchorLink>
          {menu === "about" ? <img src={underline} alt="img" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#services"> <p onClick={() => setMenu("services")}>Services</p></AnchorLink>
          {menu === "services" ? <img src={underline} alt="img" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#work">  <p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>
          {menu === "work" ? <img src={underline} alt="img" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#contact"> <p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>
          {menu === "contact" ? <img src={underline} alt="img" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
    </div>
  );
}
