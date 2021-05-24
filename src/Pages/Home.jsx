import React from 'react';
import { About, Header, Testimonials,} from '../Components';
import TestimonialForm from '../Components/Testimonial_Form/TestimonialForm';
import UpdateProfile from '../Components/DashBoard/UpdateProfile/UpdateProfile';

const Home = () => {
    return (
        <div className='home'>
            <UpdateProfile />
            <Header />
            <Testimonials />
            <About />
            <TestimonialForm />
        </div>
    )
}

export default Home
