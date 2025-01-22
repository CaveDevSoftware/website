import React from 'react';
import './CustomFallBack.css';
import { useTranslation } from 'react-i18next';
import loadingImage from '../../assets/img/loadingImage.png';

const CustomFallback = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className='loadingDiv'>
        <div className='loadingInnerDiv'>
            <img
             src={loadingImage}
             className='loadingImg spin'
             alt="loadingImg"
            />
        </div>
        <span className='loadingText'>{t("landing_page.loading")}</span>
      </div>
    </>
  );
};

export default CustomFallback;
