
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const Section = ({ category, products }) => {
  return (
    <div className="section">
      <h2>{category}</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

Section.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section;
