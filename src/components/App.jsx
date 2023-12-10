import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from './Header/Header.js';

const HomePage = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/catalog'));
const FavoritesPage = lazy(() => import('../pages/favorites'));
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};
