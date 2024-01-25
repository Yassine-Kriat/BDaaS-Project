import React, { useState , useEffect } from 'react';
import Header from './components/Header';
import FileUploader from './components/FileUploader';
import AnalysisButton from './components/AnalysisButton';
import DisplayZone from './components/DisplayZone';
import DownloadButton from './components/DownloadButton';
import './App.css';

import image from './components/img/img/blue-sky-with-pink-purple-cloud_792836-10767.avif'


function App() {
  const [fileContent, setFileContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [codeFileName, setCodeFileName] = useState(null);
  const [dataFileName, setDataFileName] = useState(null);

  const handleFileSelect = (files) => {
    const formData = new FormData();
    formData.append("txtFile", files.txtFile);
    formData.append("jarFile", files.jarFile);

    // Store the selected file names in state
    setCodeFileName(files.txtFile.name);
    setDataFileName(files.jarFile.name);

    fetch("http://localhost:8000/api/upload/files", {
        method: "POST",
        body: formData,
    })
    .then((response) => response.text())
    .then((data) => {
        console.log(data); // Log the response from the server
        // Handle the response as needed
    })
    .catch((error) => {
        console.error("Error uploading files: ", error);
        // Handle errors
    });
};

const handleAnalyze = () => {
  // Use the actual file names selected by the user
  fetch(`http://localhost:8000/api/script/execute?codeFileName=${codeFileName}&dataFileName=${dataFileName}`, {
    method: "POST",
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data); // Log the response from the server
      // Handle the response as needed
    })
    .catch((error) => {
      console.error("Error executing script: ", error);
      // Handle errors
    });
};

useEffect(() => {
  // Fetch the content of the output.txt file when the component mounts
  fetch("http://localhost:8000/api/files/output/content")
    .then((response) => {
      if (!response.ok) {
        throw new Error("File not found");
      }
      return response.json();
    })
    .then((data) => {
      const fileContent = data.join('\n'); // Combine lines into a single string
      setFileContent(fileContent);
      setLoading(false); // Set loading to false once content is fetched
    })
    .catch((error) => {
      console.error("Error fetching file content: ", error);
      setLoading(false); // Set loading to false in case of error
    });
}, []);

  return (
    <div className="App" style={{
      height: '100vh',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Header />
      <FileUploader onFileSelect={handleFileSelect} />
      <AnalysisButton onAnalyze={handleAnalyze} />
      {loading ? (
        <p>Loading...</p>
      ) : fileContent ? (
        <DisplayZone content={fileContent} />
      ) : (
        <p>No data treated yet!</p>
      )}
      <DownloadButton file={new Blob([fileContent], { type: 'text/plain' })} />
    </div>
  );
}

export default App;
