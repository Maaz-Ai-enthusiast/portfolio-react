import "./footer.css"
import footer_logo from "./../../assets/images/logo1.gif"
import user_icon from "./../../assets/images/user_icon.svg"
export default function Footer() {
  return (
    <div className="footer">

        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="logo" height={100} />
                <p> I am a full stack web and mobile app developer with industry level experience</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
         
 
        </div>
        <hr />
        <div className="footer-bottom">
                <div className="footer-bottom-left">&copy; 2024 Maaz Irfan. All rights reserved</div>
                <div className="footer-bottom-right">
                    <p>Terms of services</p>
                </div>
            </div>
      
    </div>
  )
}
