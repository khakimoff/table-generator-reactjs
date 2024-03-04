import './index.css';
interface EmptyProps {
  title: string;
}

export const Empty = ({ title }: EmptyProps) => {
  return (
    <div className="title">
      <h2>{title}</h2>
    </div>
  );
};
