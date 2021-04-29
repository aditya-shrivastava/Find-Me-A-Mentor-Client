import React from 'react';
import { About, Header, Testimonials } from '../Components';
import TestimonialForm from '../Components/Testimonial_Form/TestimonialForm';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Testimonials />
            <About />
            <TestimonialForm />
        </div>
    )
}

export default Home
