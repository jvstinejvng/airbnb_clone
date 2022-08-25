import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllSpots } from "../../store/spots";
import { loadReviews } from "../../store/reviews";
import PawReviews from "../ListingDetail/PawReviews";

import "../CSS/HomePage.css";

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


  
  return (
    <div className="AllListings">
      {spots &&
        spots.map((spot) => (
          <div className="PerListing" key={spot.id}>
            <NavLink to={`/spots/${spot.id}`}>
              <div className="PerListing">

                <img
                  className="ListingImage"
                  src={spot.previewImage}
                  alt={spot.name}
                >

                </img>

              <div className="ListingTitle">

                <span className="ListingLocation">
                  {spot.city}, {spot.state}
                </span>

                <span className="HomepagePawRating">
                <PawReviews spot={spot} />
                </span>

                </div>

                <p className="ListingDescription">{spot.description}</p>
                <p className="HomepageListingPrice"> ${spot.price} <span class="HomepageNightText">night</span></p>

              </div>
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default SpotsPage;
