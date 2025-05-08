import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // Boolean for loading
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle the submitted form
  const submit = async (e) => {
    e.preventDefault();  // Prevent form submission from refreshing the page
    setLoading(true);     // Set loading to true when submitting

    try {
      // Prepare the form data
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      // Send POST request to sign in
      const response = await axios.post("https://Bravinchui.pythonanywhere.com/api/signin", data);

      // Handle the response
      console.log(response.data);
      if (response.data.user) {
        // If login successful, store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");  // Redirect to the homepage
      } else {
        // If no user found in the response, show error message
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError(err.message || "An error occurred while signing in");
    } finally {
      setLoading(false);  // Stop loading once the process is finished
    }
  };

  return (
    <div className="row justify-content-center mt-4 text-center">
      <div className="col-md-5 card shadow p-4">
        <h2>Signin</h2>
        <form onSubmit={submit}>
          {loading && <span className="text-info">Hang on as we log you in...</span>}
          {error && <span className="text-danger">{error}</span>}

          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing In..." : "Signin"}
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
