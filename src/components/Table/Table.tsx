import { Thead } from '../Thead';
import { Tbody } from '../Tbody';
import './index.css';
import { CommonItem } from '../../pages/UniversalTable';

interface TableProps {
  openModal: (value: string, rowIndex: number) => void;
  headData: string[];
  bodyData: CommonItem[];
}

export const Table = ({ headData, bodyData, openModal }: TableProps) => {
  return (
    <table>
      <Thead data={headData} />
      <Tbody data={bodyData} openModal={openModal} />
    </table>
  );
};
