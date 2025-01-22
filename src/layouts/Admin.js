import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "components/NavBar/NavBar.js";
import routes from "routes.js";
import { ToastContainer,} from 'react-toastify';

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/cavedevsofware") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div style={{ backgroundColor: 'var(--background-color)', backgroundPosition: "center center", backgroundSize: "cover", minHeight: "100vh", width:'100%'}}>
        <div id="particles-js"></div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        <div className="main-content" ref={mainContent} style={{ position: 'absolute', top:'0', height:'100vh', width:'100%'}}>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/gamevasionsignup/" replace />} />
          </Routes>
        </div>
        <NavBar
          {...props}
          routes={routes}
          logo={{
            innerLink: "/cavedevsofware/",
            imgSrc: require("../assets/img/brand/brand_logo.png"),
            imgAlt: "...",
          }}
          style={{ position: 'absolute', top:'0', zIndex: 1,}}
        />
      </div>
    </>
  );
};

export default Admin;
