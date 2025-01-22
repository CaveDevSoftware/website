
import React, { useState} from 'react';
import Footer from "components/Footer/Footer.js";
import ".//LandingPage.css";
import headerBackground from '../assets/img/headerBackground.png';
import defaultSolutionImage from '../assets/img/defaultSolutionBackground.png';
import Solution from 'components/Solutions/Solution';

const LandingPage = (props) => {
  const [solutions, ] = useState([
    {"id":"1","name":"Web Development","description":"Need a RESTful API? A sleek, dynamic SPA? Maybe a full-stack website for your company? Let’s build it!"},
    {"id":"2","name":"Mobile Apps","description":"Bring your app ideas into reality into solutions built to impress."},
    {"id":"3","name":"Game Development","description":"From immersive 3D worlds to fun 2D adventures, your game vision starts here."},
    {"id":"4","name":"UI/UX Design","description":"Need a concept or a redesign to your platforms? Talk to us!"},
    {"id":"5","name":"Media Solutions","description":"From photo editing to full branding, we bring your ideas to life visually."},
    {"id":"6","name":"Digital Marketing","description":"Launched a product but need help with marketing? We can help!."},
  ]);


  const navigateToPage = (pagePath) => {
    window.location.href = pagePath;
  };

  return (
    <>
      <div style={{backgroundColor: 'var(--background-color)', overflow:'hidden'}}>
        <div className="landingPageHeaderDiv">
          <div className='titleSection' id="titleSection">
            <img
            src={headerBackground}
            alt="titleSection"
            />
            <div className='titleSectionText'>
              <h3>
                CAVE DEV
              </h3>
              <h2>
                SOFTWARE
              </h2>

              <button
                type="button"
                className="modularPrimaryButton browseAllGamesButton"
                onClick={() => {
                  const element = document.getElementById("solutions");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore with us
              </button>
            </div>
          </div>
          
          <div className="solutions" id="solutions">
            <h2>Solutions</h2>

            <div className="solutionsGrid">
              {solutions.map((solution) => (
                  <Solution
                    key={solution.id}
                    solution={solution} 
                    setSelectedGameId={() => navigateToPage('solutions?solution='+solution.id)} 
                    defaultSolutionImage={defaultSolutionImage} 
                  />
                ))}

            </div>

            <div className="contactsSection">
              <div className="line"></div>
              <h1>cavdevsoftware@gmail.com</h1>
            </div>

          </div>

        </div>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
