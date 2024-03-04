import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UniversalTable from './pages/UniversalTable';
import { mockData1, mockData2, mockData3 } from './mockData';

interface AppRouter {
  id: number;
  path: string;
  element: ReactElement;
}

export const AppRouter = () => {
  const routes = [
    { id: 1, path: '/', element: <Home /> },
    { id: 2, path: '/products', element: <UniversalTable data={mockData1} /> },
    { id: 3, path: '/prices', element: <UniversalTable data={mockData2} /> },
    { id: 4, path: '/pages', element: <UniversalTable data={mockData3} /> },
    { id: 5, path: '*', element: <Home /> },
  ];

  return (
    <Routes>
      {routes.map(({ id, path, element }: AppRouter) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
  );
};
