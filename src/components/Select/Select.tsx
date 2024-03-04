import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import './index.css';

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  data: object[];
}

export const Select = ({ value, onChange, options, data }: SelectProps) => {
  const isSelect = Object.values(data[0]).some(
    (item) => typeof item === 'boolean'
  );
  if (!isSelect) {
    return null;
  }

  return (
    <div className="wraper-select">
      <select value={value} onChange={onChange} className="wraper-select__item">
        <option value="none">Select boolean field...</option>
        {options.map((key) => {
          if (typeof data[0][key] === 'boolean') {
            return (
              <option key={uuidv4()} value={key}>
                {key}
              </option>
            );
          }
          return null;
        })}
      </select>
    </div>
  );
};
