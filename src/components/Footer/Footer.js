import React from 'react';
import { useTranslation } from 'react-i18next';
import './/Footer.css';
import '..//../assets/css/variables.css';

const Footer = () => {
  const { t } = useTranslation();

  const handleShowDisclaimer = () => {
    window.open('https://dragon-legion.com/disclaimer/', '_blank');
  };
  
  const handleShowPrivacyPolicy = () => {
    window.open('https://dragon-legion.com/disclaimer/', '_blank');
  };

  return (
    <>
      <footer className="customFooter">
        <div>
          <div style={{ alignItems:'center', alignContent:'center', justifyContent:'center'}} >
            <span style={{ color: 'var(--footer-text-color)',  textAlign:'center', fontFamily: 'var(--footer-text-font-family)' }}>© 2025 Cave Dev Software. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
