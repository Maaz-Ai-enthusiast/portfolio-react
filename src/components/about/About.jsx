import "./about.css";
import profileimg from "./../../assets/images/profileimg.png";
import theme_pattern from "./../../assets/images/theme_pattern.svg";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="img" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileimg} alt="img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m Maaz Irfan , a highly skilled software engineering student and learning full stack web and mobile app developer</p>
            <p>I have passion for coding, innovation, and solving complex problems.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Project Management</p>
              <hr
                style={{
                  width: "50%",
                }}
              />
            </div>
            <div className="about-skill">
              <p>Full Stack Web Development</p>
              <hr
                style={{
                  width: "50%",
                }}
              />
            </div>
            <div className="about-skill">
              <p>Mobile App Development</p>
              <hr
                style={{
                  width: "50%",
                }}
              />

            </div>
                          <div className="about-skill">
                <p>Generative Ai applications</p>
                <hr
                  style={{
                    width: "50%",
                  }}
                />
              </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achieve">
          <h1>10 +</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achieve">
          <h1>10 +</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achieve">
          <h1>10 +</h1>
          <p>Happy Clients</p>
        </div>
        
      </div>
    </div>
  );
}
