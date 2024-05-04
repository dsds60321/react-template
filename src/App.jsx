import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Layout } from '@layouts/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <h1>DASHBOARD</h1> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
