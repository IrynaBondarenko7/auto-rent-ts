import React from "react";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
