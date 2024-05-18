import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    {/*<nav>
        <Link to="/">Homepage</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>*/}
    <Outlet />
    <Footer />
  </>
);
