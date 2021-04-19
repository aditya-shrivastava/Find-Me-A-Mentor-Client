import React from 'react';
import './Header.css';
import RatingCard from '../FeaturedMentor/RatingCard/RatingCard'
import SummaryCard from '../FeaturedMentor/SummaryCard/SummaryCard'


const Header = () => {
    return (
        <div className="header">
        <RatingCard />
        <SummaryCard />
        </div>
    )
}

export default Header
