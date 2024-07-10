
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductGrid from './ProductGrid';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [cart, setCart] = useState([]);

  const handleSearch = (term, category, range) => {
    setSearchTerm(term);
    setSelectedCategory(category);
    setPriceRange(range);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<ProductGrid searchTerm={searchTerm} selectedCategory={selectedCategory} priceRange={priceRange} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
