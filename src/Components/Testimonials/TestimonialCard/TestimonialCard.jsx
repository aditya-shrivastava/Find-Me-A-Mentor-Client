import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = () => {
        const url = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    return (
            <div className='individual_testimonial'>
            <img src={url} alt="" className="object-cover h-auto w-44 rounded-l-lg"/>

            <div className="review">
            <h1>John Doe</h1>
            <h4>Swag Master</h4>

            <p>
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Neque inventore, quidem aliquid magni vero minima? 
                Exercitationem quidem in ea eligendi!"
            </p>
            </div>

            </div>
    )
}

export default TestimonialCard
