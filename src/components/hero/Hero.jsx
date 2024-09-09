import  "./hero.css"
import profileimg from "./../../assets/images/profileimg.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
export default function Hero() {
  return (
    <div className="hero">
        <img src={profileimg} alt="profileimg"  />
        <h1><span>I'm Maaz Irfan</span> , Modern full stack  Web & Mobile developer </h1>
        <p>I am a full stack web developer with industry level experience</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}
