import React from 'react';
import { Button } from 'react-bootstrap';

const DownloadButton = () => {
  const downloadFile = () => {
    fetch("http://localhost:8000/api/files/output")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'output.txt';
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading file: ", error);
        // Handle errors
      });
  };

  return (
    <Button
              variant="primary"
              onClick={downloadFile}
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
              Download the Output File !
            </Button>
  );
};

export default DownloadButton;
