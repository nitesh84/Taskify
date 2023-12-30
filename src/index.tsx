import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
