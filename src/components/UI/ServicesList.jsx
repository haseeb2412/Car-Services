import React,{useState} from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {

  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);


  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };


  return(

  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
  
        {/* <img  src={isHovered ? item.image_url : item.animated} alt="No photo"  onMouseEnter={handleHover}
        onMouseLeave={handleHover}/> */}

        <img
        src={isHovered ? item.animated : item.image_url}
        alt="Watch"
        className="gif-image"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
)
      };
export default ServicesList;
