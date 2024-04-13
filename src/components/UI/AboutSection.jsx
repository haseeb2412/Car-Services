import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <div className="about--section" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            // textAlign:'center'
          }} >
        {/* <Row> */}
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h1 className="section__title">
              Welcome  To Five Frinedly Limousine Service</h1>
              <p className="section__description">
              <h5 className="ooo">Welcome to Friendly Limousine Services,</h5>
              <hr />
              <br /> your go-to choice for luxurious ground transportation in Winnipeg, MB. We offer premium rides at affordable prices.

Explore our diverse fleet of sedans and stretch limousines, ideal for any occasion - whether it's a Birthday Party, Business Travel, Airport Transport, Wedding, Anniversary, Corporate Event, Bachelor's or Bachelorette Party, or simply a night out with friends.
<br /><br />
Our skilled chauffeurs, thoroughly vetted for your safety, ensure a smooth and delightful journey in our elegant vehicles. Our helpful team is here to assist you every step of the way, creating unforgettable travel experiences with us.
<br /><br />
Booking is hassle-free! Whether you need an instant ride or prefer to plan ahead, we've got you covered. Contact Friendly Limousine Services today to book your next ride in comfort and style!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Wedding Limo Packages
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Honeymoon Transporation
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Wedding Shuttle Transporation
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Spacious & Clean Limousines
                </p>
              </div>
            </div>
          </Col>
{/* 
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col> */}
        {/* </Row> */}
      </div>
    </section>
  );
};

export default AboutSection;
