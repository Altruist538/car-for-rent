import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import Home from 'pages/Home';

import Header from './Header/header';
import Catalog from 'pages/catalog';
import Favorites from 'pages/favorites';

// const HomePage = lazy(() => import('../pages/Home'));
// const CatalogPage = lazy(() => import('../pages/catalog'));
// const FavoritesPage = lazy(() => import('../pages/favorites'));
export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
};
