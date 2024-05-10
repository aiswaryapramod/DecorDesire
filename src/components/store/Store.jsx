import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import "./Store.scss";
import search from "../../assets/products/search.png";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "all";
  });
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("src/Product.json");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const searchedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = () => {
    if (sortBy === "lowToHigh") {
      return searchedProducts
        .slice()
        .sort(
          (a, b) =>
            parseInt(a.price.replace(",", "")) -
            parseInt(b.price.replace(",", ""))
        );
    } else if (sortBy === "highToLow") {
      return searchedProducts
        .slice()
        .sort(
          (a, b) =>
            parseInt(b.price.replace(",", "")) -
            parseInt(a.price.replace(",", ""))
        );
    } else {
      return searchedProducts;
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
    setCurrentPage(1); // Reset current page when category changes
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when search term changes
  };

  // Get current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts().slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <h1 className="store-head">Store</h1>

      <div className="store-search-area">
        <img src={search}></img>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="product-section">
        <div className="radio-buttons">
          <div className="radio-buttons">
            {/* Category radio buttons */}
            <label>
              <input
                type="radio"
                value="all"
                checked={selectedCategory === "all"}
                onChange={() => handleCategoryChange("all")}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                value="frame"
                checked={selectedCategory === "Wall decor"}
                onChange={() => handleCategoryChange("Wall decor")}
              />
              Frame
            </label>
            <label>
              <input
                type="radio"
                value="decor"
                checked={selectedCategory === "Dinner set"}
                onChange={() => handleCategoryChange("Dinner set")}
              />
              Dinner set
            </label>
            {/* Sorting radio buttons */}
            <label>
              <input
                type="radio"
                value="lowToHigh"
                checked={sortBy === "lowToHigh"}
                onChange={() => handleSort("lowToHigh")}
              />
              Low to High
            </label>
            <label>
              <input
                type="radio"
                value="highToLow"
                checked={sortBy === "highToLow"}
                onChange={() => handleSort("highToLow")}
              />
              High to Low
            </label>
          </div>
        </div>

        <div className="product-list">
          {currentProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title}></img>
              <h2>{product.title}</h2>
              <h3>₹{product.price}</h3>
              <span>{product.rating}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <ul className="pagination">
        {Array.from(
          { length: Math.ceil(sortedProducts().length / productsPerPage) },
          (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Store;
