// ResumePage.jsx — embed public Google Drive PDF preview with a download fallback
import React from 'react';

const FILE_ID = '1iVjpv-Mc6erQvu9EwyEXQgj-k4n6GrdB';

const ResumePage = () => {
  const previewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  return (
    <main style={styles.root}>
      <h1 style={styles.header}>My Resume</h1>

      <div style={styles.iframeWrap}>
        <iframe
          title="Resume PDF"
          src={previewUrl}
          style={styles.iframe}
          allowFullScreen
        />
      </div>

      <p style={styles.fallback}>
        If the embed doesn't load, you can{' '}
        <a href={downloadUrl} target="_blank" rel="noreferrer" style={styles.downloadLink}>
          download the PDF
        </a>
        .
      </p>
    </main>
  );
};

const styles = {
  root: {
    padding: '2rem',
    maxWidth: 1100,
    margin: '0 auto',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#111827',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '1rem',
    textAlign: 'center',
  },
  iframeWrap: {
    width: '100%',
    height: '80vh',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  fallback: {
    marginTop: '1rem',
    textAlign: 'center',
    color: '#374151',
  },
  downloadLink: {
    textDecoration: 'underline',
    color: '#1f2937',
    fontWeight: 600,
  },
};

export default ResumePage;
