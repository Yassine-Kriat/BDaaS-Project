import React from 'react';
import { Button } from 'react-bootstrap';

const AnalysisButton = ({ onAnalyze }) => {
  return (
    <Button
              variant="primary"
              onClick={onAnalyze}
              style={{
                width: '200px',
                background: 'linear-gradient(to right, #bf934c, #924d23)',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                color: '#fff', // Text color
                transition: 'background 0.3s ease-in-out', // Transition for hover effect
                cursor: 'pointer', // Change cursor on hover
                marginTop: '20px',
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  'linear-gradient(to right, #924d23, #bf934c)'
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  'linear-gradient(to right, #bf934c, #924d23)'
              }}
            >
              Launch Analysis
            </Button>
  );
};

export default AnalysisButton;
