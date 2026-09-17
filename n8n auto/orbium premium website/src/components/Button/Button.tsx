import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a' | typeof Link;
  to?: string;
  href?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      as: Component = 'button',
      to,
      href,
      type = 'button',
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = `btn btn--${variant} btn--${size} ${className}`;

    if (to) {
      return (
        <Link to={to} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as any)}>
          {children}
        </Link>
      );
    }

    if (Component === 'a' || href) {
      return (
        <a href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as any)}>
          {children}
        </a>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
