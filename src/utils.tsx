import { format, isValid, parseISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

export const renderCell = (data: object[]) => {
  if (typeof data === 'string' && isValid(parseISO(data))) {
    return format(parseISO(data), 'dd/MM/yyyy, HH:mm');
  } else if (typeof data === 'object') {
    return (
      <ul>
        {Object.keys(data).map((key) => (
          <li key={uuidv4()}>
            <strong>{key}: </strong>
            {renderCell(data[key])}
          </li>
        ))}
      </ul>
    );
  } else if (typeof data === 'boolean') {
    return data ? 'true' : 'false';
  }
  return String(data);
};

// Курировать
