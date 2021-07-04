import { fetchReviewsById } from "../../services/fetchApi";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Reviews = () => {
  const history = useHistory();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(history.location.state.id).then((response) =>
      setReviews(response.data.results)
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <li>Not found any reviews</li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
