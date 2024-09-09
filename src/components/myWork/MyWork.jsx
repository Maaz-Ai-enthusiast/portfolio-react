import "./myWork.css";
import theme_pattern from "./../../assets/images/theme_pattern.svg";
import mywork_data from "../../../public/constants/mywork_data";
import arrow_icon from  "./../../assets/images/arrow_icon.svg"
export default function MyWork() {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="img" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img src={work.w_img} alt="img" key={index} 
          style={{
            height:"250px"
          }}
          />;
        })}
      </div>
      <div className="mywork-showmore">
          <p>show more</p>
          <img src={arrow_icon} alt="arrow_icon" />
      </div>
    </div>
  );
}
