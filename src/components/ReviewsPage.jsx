import React, { useState, useEffect } from 'react';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from localStorage when the page loads
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  // Handle the review deletion
  const handleDeleteReview = (reviewId) => {
    // Get the reviews stored in localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Filter out the review that needs to be deleted
    const updatedReviews = savedReviews.filter((review) => review.id !== reviewId);

    // Save the updated reviews back into localStorage
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    // Update the state to re-render the UI
    setReviews(updatedReviews);
  };

  // Check if the user is the owner
  const isOwner = localStorage.getItem('role') === 'owner';

  return (
    <div className="row container-fluid bg-dark">
      <h3 className="text-center mt-3 text-light p">Most of Our Customer Reviews</h3>
      <div className="row">
        {reviews.length === 0 ? (
          <p className="text-center text-light">No reviews yet!</p>
        ) : (
          reviews.map((review) => (
            <div className="col-md-4" key={review.id}>
              <div className="card shadow text-center bg-light">
                <img
                  src={`https://Bravinchui.pythonanywhere.com/static/images/${review.product_image}`}
                  alt={review.product_name}
                  className="product_img bg pt-2"
                />
                <div className="card-body bg">
                  <h5 className="mt-2 text-light p">{review.product_name}</h5>
                  <p className='text-light'>{review.review_text}</p>
                  <p className='text-info'>Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
                  <p className='text-warning'>Reviewed by: {review.reviewer_name}</p>

                  {/* Show the delete button only if the user is the owner */}
                  {isOwner && (
                    <button
                      onClick={() => handleDeleteReview(review.id)}
                      className="btn btn-danger mt-2"
                    >
                      Delete Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
