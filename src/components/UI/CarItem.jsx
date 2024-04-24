import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl}
          style={{aspectRatio:'3/2',objectFit:'contain'}}
           alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            {/* ${price} */}
            Automatic <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1"> 
             XLE
              <i class="ri-car-line"></i> 
              {/* {model} */}
            </span>
            <span className=" d-flex align-items-center gap-1"> 
            Capacity : 
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/25/user-male--v2.png" alt="user-male--v2"/> 
               
              {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
             {/* <img width="20" height="20" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-briefcase-user-interface-anggara-basic-outline-anggara-putra.png" alt="external-briefcase-user-interface-anggara-basic-outline-anggara-putra"/>  */}
              
              {speed}
            </span>
          </div>

          <button className="mycar w-100 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Book Now</Link>
          </button>

          {/* <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button> */}
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
