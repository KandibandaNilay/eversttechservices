import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  to, 
  onClick, 
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-royalBlue to-cyan text-white shadow-lg shadow-royalBlue/25 hover:shadow-royalBlue/40 hover:scale-105 hover:-translate-y-0.5 focus:ring-royalBlue/50',
    secondary: 'bg-white text-darkBlue border-2 border-royalBlue/20 hover:border-royalBlue/50 hover:bg-royalBlue/5 shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-royalBlue border-2 border-royalBlue hover:bg-royalBlue hover:text-white',
    ghost: 'bg-transparent text-royalBlue hover:bg-royalBlue/5',
    dark: 'bg-darkBlue text-white hover:bg-royalBlue hover:shadow-lg hover:shadow-royalBlue/20',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
    xl: 'px-10 py-4 text-xl',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;   // ✅ MUST have this line