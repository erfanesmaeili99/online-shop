import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [highestPricedProducts, setHighestPricedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));

    fetch('https://fakestoreapi.com/products?sort=desc')
      .then(res => res.json())
      .then(json => setHighestPricedProducts(json.slice(0, 3))); // Get top 3 highest priced products
  }, []);

  const handleSearch = () => {
    onSearch(searchTerm, selectedCategory, priceRange);
  };

  return (
    <header>
      <div className="banner_bg_main">
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-12">
                <div className="custom_menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Add product</a></li>
                    <li><a href="/cart">Cart</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo"><a href="index.html"></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_section">
          <div className="container">
            <div className="containt_main">
              <div className="main">
                <div className="input-group">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    />
                    <button onClick={handleSearch}>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner carouselcontent">
                {highestPricedProducts.map((product, index) => (
                  <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      <div className="col-sm-12 carousel-inner-image">
                        <img className='banner_image' src={product.image} alt={product.title} />
                        <div>
                          <h3 className="banner_taital carouseltitle">{product.title}</h3>
                          <h2 >price :{product.price}</h2>
                          <div className="buynow_bt"><Link to={`/product/${product.id}`}>Buy Now</Link></div>
                        </div>
                       
                      </div>

                    </div>
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
