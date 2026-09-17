import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, size = 'default', className = '' }) => {
  return (
    <div className={`container container--${size} ${className}`}>
      {children}
    </div>
  );
};
