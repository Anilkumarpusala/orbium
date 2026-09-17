import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '4rem', textAlign: 'center', backgroundColor: 'var(--bg-dark, #101010)', color: 'var(--text-on-dark, #F3F0E8)' }}>
      <p>&copy; {new Date().getFullYear()} ORBIUM. All rights reserved.</p>
    </footer>
  );
};
