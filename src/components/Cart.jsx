import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart on component mount, only once
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Loaded cart from localStorage:", savedCart);  // Log loaded cart
    setCart(savedCart); // Set the cart state only once
  }, []); // Only run on mount

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      console.log("Saving cart to localStorage:", cart); // Log cart before saving
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]); // Runs only when cart state changes

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product_id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.product_id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="row container-fluid bg-dark">
      <h3 className="text-light text-center p">Welcome to the cart page</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cart.map((product) => (
              <div className="col-md-4 mb-4" key={product.product_id}>
                <div className="card  text-center bg-light">
                  <img
                    src={`https://Bravinchui.pythonanywhere.com/static/images/${product.product_photo}`}
                    alt={product.product_name}
                    className="product_img bg pt-2" // This will apply the styles defined in the CSS file
                  />
                  <div className="card-body bg">
                    <h5 className="text-light">{product.product_name}</h5>
                    <p className="text-info">{product.product_description}</p>
                    <b className="text-warning"> Ksh {product.product_cost}</b>

                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center my-2 text-light">
                      <button
                        className="btn btn-sm btn-outline-secondary me-2 text-light"
                        onClick={() => decreaseQuantity(product.product_id)}
                      >
                        −
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary ms-2 text-light"
                        onClick={() => increaseQuantity(product.product_id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Item Button */}
                    <button
                      className="btn btn-sm btn-danger mt-2"
                      onClick={() => removeItem(product.product_id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Button */}
          <div className="text-center mt-4">
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate("/cartpayment")}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
