// ResumePage.jsx
import React from 'react';

const ResumePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Resume</h1>
{/*       <p style={styles.description}>
        Discover my professional journey by accessing my resume
      </p> */}
      <a 
        href="https://drive.google.com/file/d/1fGeNT2Oxod-lFUWPsXhWTgsMXj8Hk3rh/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.link}
      >
        View Resume
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#F5F5F7',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#1D1D1F',
  },
  header: {
    fontSize: '3em',
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: '0.5em',
  },
  description: {
    fontSize: '1.2em',
    color: '#6e6e73',
    marginBottom: '2em',
    textAlign: 'center',
    maxWidth: '500px',
    lineHeight: '1.6',
  },
  link: {
    fontSize: '1.1em',
    fontWeight: '500',
    color: '#0071e3',
    textDecoration: 'none',
    padding: '0.6em 1.2em',
    border: '1px solid #0071e3',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
};

export default ResumePage;
