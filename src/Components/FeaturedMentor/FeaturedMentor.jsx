import React from 'react';
import './FeaturedMentor.css';
import RatingCard from '../FeaturedMentor/RatingCard/RatingCard'
import SummaryCard from '../FeaturedMentor/SummaryCard/SummaryCard'
import img3 from '../../Assets/Group 7.svg'


const FeaturedMentor = () => {
    return (
        <React.Fragment>           
            <div className='featured-mentor'>
                <div className="rating">
                    <RatingCard />
                </div>
                <div className="rating2">
                    <RatingCard />
                </div>
                <div className="summary">
                    <SummaryCard />
                </div>
                <img src={ img3 } alt= "" className="img3"/> 
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" width="400" height = "400" />
            </div>
        </React.Fragment>
        
    )
}

export default FeaturedMentor
