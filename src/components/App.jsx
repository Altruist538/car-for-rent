import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';
import Header from './Header/Header';

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
