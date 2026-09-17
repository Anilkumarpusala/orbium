import React from 'react';
import './SectionHeader.css';

export interface SectionHeaderProps {
  number?: string;
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  description,
  align = 'left',
  dark = false,
}) => {
  const classes = `section-header section-header--${align} ${dark ? 'section-header--dark' : ''}`;

  return (
    <header className={classes}>
      {(number || label) && (
        <div className="section-header__meta">
          {number && <span className="section-header__number">{number}</span>}
          {number && label && <span className="section-header__separator">—</span>}
          {label && <span className="section-header__label">{label}</span>}
        </div>
      )}
      <h2 className="section-header__title">{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </header>
  );
};
