import React from 'react';
import './Review.css';
import RatingCard from '../../FeaturedMentor/RatingCard/RatingCard';

const Review = () => {
    return (
        <div className='Review'>
            <div className='heading'>Recent Ratings</div>
            <div className='recentRating'>
                <RatingCard />
            </div>
        </div>
    )
}
export default Review
