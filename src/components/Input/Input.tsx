import React from 'react';
import './index.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className="input"
      value={value}
      onChange={onChange}
    />
  );
};
