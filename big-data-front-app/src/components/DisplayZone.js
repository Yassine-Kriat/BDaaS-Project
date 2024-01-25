import React from 'react';
import { Container} from 'react-bootstrap';


const DisplayZone = ({ content }) => {
  return (
    <div className="display-zone" sstyle={{
      marginTop: '20px', // Add some space between logos and container
      display: 'flex',
      justifyContent: 'center',
      width: '100%', // Full width
    }}>
      
      <div style={{ margin: '30px', color: '#d9ded8' }}>
      <Container
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
      <h1 style={{ color: '#924d23', fontFamily: 'Magnific Caos' }}>
            <b>There is the result of the analyzed data </b>
          </h1>
            {content}
      </Container>

      </div>
        
          
      
    </div>
  );
};

export default DisplayZone;
