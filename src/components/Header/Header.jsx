import React, { useRef,useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css"; 
import world from "../myicons/icons8-world.gif"
import watch from "../myicons/icons8-clock.gif"
import watchImage from "../myicons/icons8-clock-64.png"
import worldImage from "../myicons/icons8-world-64.png"
import Logo from "../myicons/1.png"
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Fleet",
  },

  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },
  {
    path: "/faq",
    display: "FAQ",
  },
  {
    path: "/testimonials",
    display: "Testimonials",
  },
  // {
  //   path: "/Booking",
  //   display: "Booking",
  // },
  {
    path: "/contact",
    display: "Contact Us",
  },

];

const Header = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };


  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      {/* <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Firendly Limousine <br /> Services
                    </span>
                    {/* <img src={Logo} alt="logo" className="my2" width="100px" height="100px"/> */}
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  {/* <i class="ri-earth-line"></i> */}
                  {/* <img src={world} alt="no photo" /> */}

                  <img
        src={isHovered2 ? world : worldImage}
        alt="Watch"
        className="gif-image"
        onMouseEnter={handleHover2}
        onMouseLeave={handleHover2}
      />

                </span>
                <div className="header__location-content">
                  <h4>11 Brian Monkman Bay, Winnipeg,Canada.</h4>
                  {/* <h6>Winnipeg City, Canada</h6> */}
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  {/* <i class="ri-time-line"></i> */}
                  <img
                    src={isHovered ? watch : watchImage}
                    alt="Watch"
                    className="gif-image my1"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                  />
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>24 * 7</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end  "
            >
              <button className="header__btn btn  ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Contact Us
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}auto
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
