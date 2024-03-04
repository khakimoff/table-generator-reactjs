import { v4 as uuidv4 } from 'uuid';

import { Empty } from '../Empty';
import './index.css';

interface TheadProps {
  data: Array<string>;
}

export const Thead = ({ data }: TheadProps) => {
  const isLastTh = (index: number) => (index + 1 === data.length ? 2 : 1);
  if (!data.length) {
    return <Empty title="No data" />;
  }

  return (
    <thead>
      <tr>
        {data.map((key, index) => (
          <th colSpan={isLastTh(index)} key={uuidv4()}>
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
};
