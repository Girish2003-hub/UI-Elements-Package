import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  label: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({ id, className, label, onClick, disabled }) => {
    return (
      <button
        id={id}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
);

export { Button };

Button.displayName = 'Button';
