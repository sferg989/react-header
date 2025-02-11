import * as React from 'react';

interface GradientHeaderProps {
  title?: string;
  subtitle?: string;
}

const GradientHeader: React.FC<GradientHeaderProps> = ({ 
  title = "Welcome to the App.  This is a test", 
  subtitle = "Start building amazing things" 
}) => {
  return (
    <header 
      style={{
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <h1 style={{ 
        margin: 0,
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{
          margin: '0.5rem 0 0',
          fontSize: '1.2rem',
          opacity: 0.9
        }}>
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default GradientHeader; 