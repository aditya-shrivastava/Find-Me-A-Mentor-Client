import React from 'react';
import './RatingCard.css';
import StarRateIcon from '@material-ui/icons/StarRate';

const RatingCard = () => {
    return (
        <div className='rating-card'>
            <div className='starIcon'>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
            </div>
            
            <p className="name"> 
                Riddhi Pal
            </p>
            
        </div>
    )
}

export default RatingCard
