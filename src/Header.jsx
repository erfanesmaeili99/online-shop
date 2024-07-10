
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  const handleSearch = () => {
    onSearch(searchTerm, selectedCategory, priceRange);
  };

  return (
    <header>
      <div class="banner_bg_main">
        <div class="container">
          <div class="header_section_top">
            <div class="row">
              <div class="col-sm-12">
                <div class="custom_menu">
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
        <div class="logo_section">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="logo"><a href="index.html"></a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="header_section">
          <div class="container">
            <div class="containt_main">
              <div class="main">
                <div class="input-group">
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
        <div class="banner_section layout_padding">
          <div class="container">
            <div id="my_slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div class="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div class="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div class="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
