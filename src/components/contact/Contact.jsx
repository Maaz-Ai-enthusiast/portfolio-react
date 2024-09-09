import React from "react"
import "./contact.css"
import theme_pattern from "./../../assets/images/theme_pattern.svg"
import mail_icon from "./../../assets/images/mail_icon.svg"
import call_icon from "./../../assets/images/call_icon.svg"
import location_icon from "./../../assets/images/location_icon.svg"
export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fbd5ea18-e5c2-4c04-9c00-b486d1b63c2d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert("Your request has been sent successfully. Soon Maaz will contact you. Thanks 😊");

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contact" id="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="img" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects , so feel free to contact me </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail_icon" />
                        <p>maaz.ai.enthusiast@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call_icon" />
                        <p>0751907321907</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="loation_icon" />
                        <p>Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name"  name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button className="contact-submit" type="submit">Submit Now</button>
            </form>
        </div>
           
    </div>
  )
}
