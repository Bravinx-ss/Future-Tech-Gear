import axios from "axios";
import React, { useState, useEffect } from "react";

const CartPayment = () => {
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://Bravinchui.pythonanywhere.com/static/images/";

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.product_cost * item.quantity,
    0
  );

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (value.startsWith("07")) value = "254" + value.slice(1);
    if (value.startsWith("+254")) value = "254" + value.slice(4);
    setPhone(value);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!phone || cart.length === 0) return;

    setLoading("Processing payment...");
    setError("");
    setSuccess("");

    const data = new FormData();
    data.append("phone", phone);
    data.append("amount", totalAmount);

    try {
      const response = await axios.post(
        "https://Bravinchui.pythonanywhere.com/api/mpesa_payment",
        data
      );
      setLoading("");
      setSuccess(response.data.message);
      localStorage.removeItem("cart");
      setCart([]);
    } catch (err) {
      setLoading("");
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5 bg-dark text-light">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-success text-white text-center">
              <h3>Cart Payment</h3>
            </div>
            <div className="card-body">
              {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.product_id} className="d-flex mb-3 align-items-center">
                      <img
                        src={img_url + item.product_photo}
                        alt={item.product_name}
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        className="me-3 rounded"
                      />
                      <div>
                        <h5 className="mb-1">{item.product_name}</h5>
                        <small>
                          {item.quantity} × Ksh {item.product_cost} ={" "}
                          <strong>Ksh {item.product_cost * item.quantity}</strong>
                        </small>
                      </div>
                    </div>
                  ))}

                  <hr />
                  <h4 className="text-warning">Total: Ksh {totalAmount}</h4>

                  {loading && <div className="text-info mt-3">{loading}</div>}
                  {success && <div className="text-success mt-3">{success}</div>}
                  {error && <div className="text-danger mt-3">{error}</div>}

                  <form onSubmit={handlePayment} className="mt-4">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fs-5">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="254..."
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      Pay Now
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
