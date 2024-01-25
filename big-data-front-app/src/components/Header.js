import React from 'react';

import image1 from './img/img/Logo-toulouse-inp-N7.png' // Import your logo images
import image2 from './img/img/Apache_Spark_logo.svg.png'
import image3 from './img/img/1280px-Hadoop_logo.svg.png'
import image4 from './img/img/pngtree-big-data-icon-design-flat-color-style-file-technology-internet-vector-png-image_38604204.png'

const Header = () => {
  return (
    <div className="header" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
      <img src={image1} alt="Logo 1" style={{ width: '150px', margin: '10px 10px' }}/>
      <img src={image2} alt="Logo 2" style={{ width: '150px', margin: '10px 10px' }}/>
      <img src={image3} alt="Logo 3" style={{ width: '150px', margin: '10px 10px' }}/>
      <img src={image4} alt="Logo 4" style={{ width: '100px', margin: '10px 10px' }}/>
      <h2 style={{ color: '#c5e3ed', fontFamily: 'Magnific Caos' }}>
          <b>
            <i>Big Data</i>
          </b>
        </h2>
    </div>
  );
};

export default Header;
