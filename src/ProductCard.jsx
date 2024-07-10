
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const summarizedDescription = product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{summarizedDescription}</p>
      <div className="price">${product.price}</div>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
