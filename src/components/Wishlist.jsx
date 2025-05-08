import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // Fetch wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.product_id !== productId
    );
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleCheckout = (product) => {
    navigate("/makepayment", { state: { product } });
  };

  return (
    <div className="row container-fluid bg-dark">
      <h3 className="text-center mt-3 text-light">Your Wishlist</h3>
      <div className="row">
        {wishlist.length === 0 ? (
          <p className="text-center text-light">Your wishlist is empty!</p>
        ) : (
          wishlist.map((product) => (
            <div
              className="col-md-4 justify-content-center mb-4 bg-dark"
              key={product.product_id}
            >
              <div className="card shadow text-center">
                <img
                  src={"https://Bravinchui.pythonanywhere.com/static/images/" + product.product_photo}
                  alt={product.product_name}
                  className="product_img bg pt-2"
                />
                <div className="card-body bg">
                  <h5 className="mt-2 text-light">{product.product_name}</h5>
                  <p className="text-light">{product.product_description}</p>
                  <b className="text-warning">{product.product_cost}</b> <br />
                  <button
                    onClick={() => handleCheckout(product)} // Handle checkout
                    className="btn btn-success mt-2"
                  >
                    Make Payment
                  </button>
                  <br />
                  <button
                    onClick={() => removeFromWishlist(product.product_id)} // Remove from wishlist
                    className="btn btn-danger mt-2"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
