import "./services.css"
import Services_Data from "../../../public/constants/services_data"
import services_pattern from "./../../assets/images/services_pattern.svg"
import arrow_icon from "./../../assets/images/arrow_icon.svg"

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src={services_pattern} alt="img" /> */}
      </div>
      <div className="services-container">
             {Services_Data.map(( data,index)=>{
                

                  return( <div key={index} className="services-format">

                      <h3>{data.s_no}</h3>
                      <h2>{data.s_name}</h2>
                      <p>{data.s_desc}</p>

                      <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow_icon" />
                      </div>

                  </div>
                  )
            })
              
            }
      </div>
    </div>
  )
}
