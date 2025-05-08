import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carouselcomponent from './Carouselcomponent';

const Getproducts = () => {
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [activeProductId, setActiveProductId] = useState(null); // Track active product for toggling review form visibility
  const [showReviewForm, setShowReviewForm] = useState(false); // Control visibility of the review form
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []); // Initialize wishlist from localStorage
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []); // Initialize cart from localStorage
  const navigate = useNavigate();
  const img_url = "https://Bravinchui.pythonanywhere.com/static/images/";

  const getproducts = async () => {
    setLoading('Please Wait...');
    try {
      const response = await axios.get('https://Bravinchui.pythonanywhere.com/api/get_product_details');
      setLoading('');
      setError('');
      setProduct(response.data);
    } catch (error) {
      setLoading('');
      setError(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const filtered_products = product.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(), // Unique ID for the review based on timestamp
      product_id: activeProductId,
      review_text: reviewText,
      rating: rating,
      product_name: product.find((p) => p.product_id === activeProductId).product_name,
      product_image: product.find((p) => p.product_id === activeProductId).product_photo,
      reviewer_name: 'Anonymous',
    };

    // Save review to localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Reset form
    setReviewText('');
    setRating(5);
    setShowReviewForm(false);
    alert('Review submitted successfully!');
  };

  // Toggle review form visibility
  const handleProductImageClick = (productId) => {
    if (activeProductId === productId) {
      setShowReviewForm(!showReviewForm);
    } else {
      setActiveProductId(productId);
      setShowReviewForm(true);
    }
  };

  // Handle Add to Wishlist
  const handleAddToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    alert(`${product.product_name} added to your wishlist!`);
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const productExistsInCart = cart.some((item) => item.product_id === product.product_id);
    
    if (productExistsInCart) {
      alert('This product is already in your cart.');
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`${product.product_name} added to your cart!`);
    }
  };

  return (
    <div className="row container-fluid bg-dark">
      <Carouselcomponent />
      <span className="text-info">{loading}</span>
      <span className="text-danger">{error}</span>
      <h3 className="mt-3 text-center text-light">Discover The Latest FTG Gadgets</h3>

      {/* Search Input */}
      <div className="row justify-content-center mt-3 mb-3 bg-dark">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Display Filtered Products */}
      {filtered_products.map((product) => (
        <div className="col-md-4 justify-content-center mb-4 bg-dark" key={product.product_id}>
          <div className="card shadow text-center">
            <img
              src={img_url + product.product_photo}
              alt={product.product_name}
              className="product_img bg pt-2"
              onClick={() => handleProductImageClick(product.product_id)} // Toggle review form for this product
            />
            <div className="card-body bg">
              <h5 className="mt-2 text-light">{product.product_name}</h5>
              <p className="text-light">{product.product_description}</p>
              <b className="text-warning">{product.product_cost}</b> <br />

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)} // Add to cart functionality
                className="btn btn-outline-primary mt-2"
              >
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={() => handleAddToWishlist(product)}
                className="btn btn-outline-secondary mt-2 ms-2"
              >
                Add to Wishlist
              </button>

              <br />

              <button
                onClick={() => navigate('/makepayment', { state: { product, img_url } })}
                className="btn btn-outline-success mt-2"
              >
                Purchase Now
              </button>

              {/* Review Form */}
              {showReviewForm && activeProductId === product.product_id && (
                <div className="mt-4 bg-light p-4 rounded">
                  <h5>Write a Review</h5>
                  <form onSubmit={handleReviewSubmit}>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Write your review here"
                      className="form-control"
                      rows="3"
                      required
                    />
                    <div className="mt-2">
                      <label>Rating:</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        className="form-select"
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <option key={star} value={star}>
                            {star} Star{star > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-2">
                      Submit Review
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getproducts;
