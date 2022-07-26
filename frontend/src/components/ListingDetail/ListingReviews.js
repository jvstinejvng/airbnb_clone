import React, {useState, useEffect} from 'react';
import { NavLink, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadReviews } from '../../store/reviews';

import  ReviewFormModal  from "../CreateReview";


const SpotReviews = ({spotId}) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => Object.values(state.reviews));
  const sessionUser = useSelector((state) => state.session.user);
  const [ModalReview, setModalReview] = useState(false)
  const spot = useSelector((state) => state.spots[spotId]);


  useEffect(() => {
      dispatch(loadReviews(spotId ));
  }, [dispatch, spotId])

    return (
     
      <div >

        <div>
          {(<ReviewFormModal ModalReview={ModalReview} setModalReview={setModalReview}/>)}
        </div>

        <h3>Reviews</h3>

        <div className="UserReview">
        { reviews.map((reviewState, index) => {
          return (
            <div className="ListingReviews" key={index}>
              <span className="ReviewUser" >review by owner {`${reviewState.userId}`}</span>
              <span className="ReviewPaws">{`${reviewState.stars}`} paws</span>
              <span className="ReviewText">{`${reviewState.review}`}</span>
            </div>
          )
        })
        }
        </div>

        {/* && sessionUser.id !== spot.ownerId */}
        
        {sessionUser  && (
            <div className = "CreateReviewButton">
              <NavLink className = "CreateReviewText" onClick={()=> setModalReview(true)} to={`/spots/${spotId}`}>Create Review</NavLink>
            </div>
  
        )}

      </div>
    
    )


};

export default SpotReviews;
