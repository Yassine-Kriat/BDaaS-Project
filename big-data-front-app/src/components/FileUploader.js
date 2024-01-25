import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';



const FileUploader = ({ onFileSelect }) => {
  const [selectedFiles, setSelectedFiles] = useState({ txtFile: null, jarFile: null });

  const handleFileChange = (e) => {
    setSelectedFiles({ ...selectedFiles, [e.target.name]: e.target.files[0] });
  };

  const handleFileUpload = () => {
    onFileSelect(selectedFiles);
  };

  return (
    <div className="file-uploader" style={{
        marginTop: '20px', // Add some space between logos and container
        display: 'flex',
        justifyContent: 'center',
        width: '100%', // Full width
      }}>
        <Container
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
        <h1 style={{ color: '#924d23', fontFamily: 'Magnific Caos' }}>
            <b>Welcome to Big Data Analysis Application</b>
          </h1>

          <h3 style={{ color: '#bf934c' }}>
            <b>
              Please upload the file containing the data to analyze and a .jar
              file with the code for data treatment.
            </b>
          </h3>
          <Form style={{ marginTop: '20px', textAlign: 'center' }}>
            <Form.Group style={{ marginBottom: '20px' }}>
    <label style={{ marginRight: '10px', color: '#d9ded8' }}><b>Upload Data File (.txt)</b></label>
      <input type="file" name="txtFile" accept=".txt" onChange={handleFileChange} style={{
                  display: 'inline-block',
                  width: '200px',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '2px solid #3077f2',
                  backgroundColor: '#d9ded8',
                  color: '#495057',
                  cursor: 'pointer', // Change cursor on hover
                }}/>
                </Form.Group>
        <Form.Group style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px', color: '#d9ded8' }}><b>Upload the Compiled Java Code File (.jar)</b></label>
      <input type="file" name="jarFile" accept=".jar" onChange={handleFileChange} style={{
                  display: 'inline-block',
                  width: '200px',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '2px solid #3077f2',
                  backgroundColor: '#d9ded8',
                  color: '#495057',
                  cursor: 'pointer', // Change cursor on hover
                }}/>
                </Form.Group>
                <Button
              variant="primary"
              onClick={handleFileUpload}
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
              Upload Files
            </Button>
    

      </Form>
      </Container>
    </div>
  );
};

export default FileUploader;
