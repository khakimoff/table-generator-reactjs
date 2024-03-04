import { MouseEventHandler } from 'react';
import { Image } from '../Image';
import './index.css';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  srcImg?: string;
  alt?: string | undefined;
  heightImg?: string | number;
  isImage?: boolean;
}

export const Button = ({
  onClick,
  title,
  srcImg,
  alt,
  heightImg,
  isImage = false,
}: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {isImage && srcImg && <Image src={srcImg} alt={alt} height={heightImg} />}
      <p>{title}</p>
    </button>
  );
};
