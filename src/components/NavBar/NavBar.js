import { useState } from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { PropTypes } from "prop-types";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Collapse
} from "reactstrap";
import { useTranslation } from 'react-i18next';
import './/Navbar.css';

const TopNavbar = ({ routes = [{}], logo }) => {
  const { t } = useTranslation();
  const is_superuser = localStorage.getItem("is_superuser");
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  const createLinks = (routes) => {
    let visibleRoutes = routes.filter((route) => !route.hidden);
  
    if (is_superuser === "false" || is_superuser === null) {
      visibleRoutes = visibleRoutes.filter((route) => !route.super_admin_only);
    }
  
    const handleScroll = (scrollTo) => {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
          });
        } else {
          console.warn(`Element with id "${scrollTo}" not found.`);
        }
      }, 100);
    };
    
    
    return (
      <>
        {visibleRoutes.map((prop, key) => (
          <NavItem key={key} style={{ margin: '0 0', height:'100%' }}>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              onClick={() => {
                closeCollapse();
                // If there's a scrollTo property, scroll to the element
                if (prop.scrollTo) {
                  handleScroll(prop.scrollTo);
                }
              }}
              className="custom-nav-link"
              style={{ height:'100%' }}
            >
              <i className={prop.icon} style={{ height:'100%' }}/>
              {t(prop.name)}
            </NavLink>
          </NavItem>
        ))}

      </>
    );
  };
  

  function handleBrandClick() {
    window.location.href = "/website/";
  }

  return (
    <Navbar container='' className="navbar-top navbar-dark" expand="md" style={{ width: "100%", zIndex: 1 , padding:'0px', height:'100%'}}>
      <Container fluid style={{  zIndex: 1, minHeight: 85, width:'100%', padding:'0', height:'100%'}} className="navbarExpander">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          style={{ paddingLeft: '15%' }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Collapse navbar isOpen={collapseOpen} style={{ height:'100%' }}>
          <div className="collapse-div">
            <NavbarBrand className="customNavbarBrand" onClick={handleBrandClick}>
              <img
                  onClick={handleBrandClick}
                  alt={logo.imgAlt}
                  src={logo.imgSrc}
                  className="brand"
                />
              <div className="navbarBrandDiv">
                <span className="navbarBrandName">CAVE DEV </span>
                <span className="navbarBrandName2">SOFTWARE</span>
              </div>
            </NavbarBrand>
            <button
              color="white"
              className="navbar-toggler"
              type="button"
              onClick={toggleCollapse}
            >
              <span className="x-span" />
              <span className="x-span" />
            </button>
          </div>
          <Nav navbar className="navbar-custom-style" style={{ paddingRight: '5%', zIndex: 1, height:'100%' }}>
            {createLinks(routes)}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default TopNavbar;
