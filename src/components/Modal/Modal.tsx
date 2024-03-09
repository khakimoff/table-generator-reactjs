import { ChangeEvent, MouseEvent } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import './index.css';

interface ModalProps {
  title: string;
  setIsOpenPortal: (value: boolean) => void;
  name: string;
  editValue: string;
  setEditValue: (value: string) => void;
  saveEdit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Modal = ({
  title,
  setIsOpenPortal,
  name,
  editValue,
  setEditValue,
  saveEdit,
}: ModalProps) => {
  return (
    <form className="modal-overlay">
      <div className="modal">
        <div className="modal__header">
          <h3>{title}</h3>
          <div
            className="modal__header block"
            onClick={() => setIsOpenPortal(false)}
          >
            <p>(Esc)</p>
            <div className="block__close"></div>
          </div>
        </div>
        <div className="modal__body">
          <label>
            <span>{name}</span>
            <Input
              value={editValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEditValue(e.target.value)
              }
              placeholder="To enter value"
            />
          </label>
        </div>
        <div className="modal__bottom">
          <Button onClick={saveEdit} title="Save" />
        </div>
      </div>
    </form>
  );
};
