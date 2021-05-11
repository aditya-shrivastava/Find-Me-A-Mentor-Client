import React from 'react';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h1>People love what we do.</h1>
            <div className="cards">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default Testimonials
