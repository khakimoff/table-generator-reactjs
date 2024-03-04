import { Thead } from '../Thead';
import { Tbody } from '../Tbody';
import './index.css';

interface TableProps {
  openModal: (value: string, rowIndex: number) => void;
  headData: Array<string>;
  bodyData: Array<object>;
}

export const Table = ({ headData, bodyData, openModal }: TableProps) => {
  return (
    <table>
      <Thead data={headData} />
      <Tbody data={bodyData} openModal={openModal} />
    </table>
  );
};
