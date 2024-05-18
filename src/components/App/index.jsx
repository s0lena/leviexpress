import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
