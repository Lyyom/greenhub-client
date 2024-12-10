import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MainPage from './assets/pages/MainPage';
import ProductList from './assets/pages/ProductList';
import ProductDetail from './assets/pages/ProductDetail';
import SellerPage from './assets/pages/SellerPage';
import SellerDetail from './assets/pages/SellerDetail';
import CompanyList from './assets/pages/CompanyList';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header'; // Importação do Header
import './global.css'; // Importação do estilo global

function App() {
  return (
    <div id="root">
      <Router>
        {/* Adicionando o Header */}
        <Header />
        <Routes>
          {/* Rota para a página principal */}
          <Route path="/" element={<MainPage />} />

          {/* Rotas para produtos */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Rotas para vendedores */}
          <Route path="/workers" element={<SellerPage />} />
          <Route path="/worker/:id" element={<SellerDetail />} />
          <Route path="/companies" element={<CompanyList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

