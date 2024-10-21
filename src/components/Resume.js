// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <iframe 
        src="/Kaviyarasan_resume.pdf" 
        width="100%" 
        height="600px" 
        title="Resume"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href="/resume.pdf">Download PDF</a>
      </iframe>
    </div>
  );
};

export default Resume;
