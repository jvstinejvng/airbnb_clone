import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReviews, deleteReview} from '../../store/reviews';
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Reviews = () => {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => Object.values(state.reviews));
    const history = useHistory()
    //const spots = useSelector((state) => Object.values(state.spotInRootReducer));
    // let [obj] = spots
    //console.log('THIS IS THE REVIEWS AFTER DECON', reviews)


    useEffect(() => {
        dispatch(getUserReviews());
    }, [dispatch])

    // const deleteReview = (e) => {
    //   e.preventDefualt()
    //   dispatch(deleteReview())
    // }


    const deleteReviews = (reviewID) => async (e) => {
      e.preventDefault()
      await dispatch(deleteReview(reviewID))
      await (dispatch(getUserReviews(reviewID)))
      history.push('/user/reviews')
    }



    return (
    //   <div className='all-reviews-div'>
    //     <h1>Your Reviews</h1>
    //     {reviews.map((reviewState, i) => {
    //       return (
    //         <div key={reviewState.id}>
    //         <p className='stars'>{`${reviewState.User.firstName} ${reviewState.User.lastName}`}</p>
    //         <p className='user'>{`${reviewState.stars} stars`}</p>
    //         <p className='actual-review'>{`${reviewState.review}`}</p>

    //         </div>

    //       )
    //     })
    //     }
    //   </div>
    // )

    <div className='all-reviews-div'>
      <h1>Reviews</h1>
      {reviews.map((reviewState) => {
        return (
          <div key={reviewState.id}>
          <div className='review-div'>
          {/* <p className='stars'>{`${reviewState.User.firstName} ${reviewState.User.lastName}`}</p> */}
          <p className='user'>{`${reviewState.stars} stars`}</p>
          <p className='actual-review'>{`${reviewState.review}`}</p>
          </div>
          <div className="deleteButton">
            <button onClick={deleteReviews(reviewState.id)}>Delete Review</button>
          </div>
          </div>
        )
      })
      }
    </div>
  )


};

export default Reviews;