import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ROUTES from './routes/appRoutes'; // Importing the router
import { RouterProvider } from 'react-router-dom';
import ROUTES from './pages/routes/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ROUTES} />
  </React.StrictMode>
);

