import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllSpots } from "../../store/spots";
import { loadReviews } from "../../store/reviews";
import "./spots.css";

const SpotsPage = () => {
  const dispatch = useDispatch();
  const spots = useSelector((state) => Object.values(state?.spots));
  const reviews = useSelector((state) => Object.values(state.reviews))


  const spotsString = JSON.stringify(spots);
  const reviewsString = JSON.stringify(reviews);

  useEffect(() => {
    getAllSpots(dispatch);
  }, [dispatch, spotsString]);

  useEffect(() => {
    dispatch(loadReviews());
  }, [dispatch, reviewsString]);



  
  const starSpot = (spotId) => {
    const allReviewsForThisSpot = reviews.filter((review) => {
      return review.spotId === spotId;
    });
    let allStars = 0
    allReviewsForThisSpot.forEach((review) => {
      allStars += review.stars;
    })
    const avgStarRating = allStars / allReviewsForThisSpot.length;
    return avgStarRating;
  }
  
  return (
    <div className="spotsPage">
      {spots &&
        spots.map((spot) => (
          <div key={spot.id}>
            <NavLink to={`/spots/${spot.id}`}>
              <div className="eachSpot">
                <img
                  className="spotImg"
                  src={spot.previewImage}
                  alt={spot.name}
                ></img>
                <h3 className="spotName">{spot.name}</h3>
                <h4 className="spotLocation">
                  {spot.city}, {spot.state}
                </h4>
                <p className="spotAddress">{spot.address}</p>
                <p className="spotDetails">{spot.description}</p>
                <p className="spotPrice"> ${spot.price} night</p>
                <p className="spotStars">Star Rating: {starSpot(spot.id)}</p>

              </div>
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default SpotsPage;
