import { Link } from 'react-router-dom';

function Home() {
  interface IHome {
    to: string;
    title: string;
    id: number;
  }
  const links = [
    { id: 1, to: '/products', title: 'Products' },
    { id: 2, to: '/prices', title: 'Prices' },
    { id: 3, to: '/pages', title: 'Pages' },
  ];
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {links.map(({ to, title, id }: IHome) => (
          <li key={id}>
            <Link to={to} target="_blank">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
