
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ searchTerm, selectedCategory, priceRange }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = 'https://fakestoreapi.com/products';
      if (selectedCategory) {
        url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      }
      const response = await fetch(url);
      let data = await response.json();

      data = data.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = (!priceRange.min || product.price >= priceRange.min) && (!priceRange.max || product.price <= priceRange.max);
        return matchesSearch && matchesPrice;
      });

      setProducts(data);
    } catch (err) {
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, selectedCategory, priceRange]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-grid" id="productsection">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
