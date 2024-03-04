import { v4 as uuidv4 } from 'uuid';

import { Button } from '../Button';
import { Empty } from '../Empty';
import { renderCell } from '../../utils';

interface TbodyProps {
  data: object[];
  openModal: (value: string, rowIndex: number) => void;
}
export const Tbody = ({ data, openModal }: TbodyProps) => {
  if (!data.length) {
    return <Empty title="No data" />;
  }

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={uuidv4()}>
          {Object.keys(item).map((key) => (
            <td key={uuidv4()}>{renderCell(item[key])}</td>
          ))}
          <td>
            <Button
              onClick={() => openModal(item[Object.keys(item)[1]], index)}
              title="Edit"
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
