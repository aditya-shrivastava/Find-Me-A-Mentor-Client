import React from 'react';
import { About, Header, Testimonials } from '../Components';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Testimonials />
            <About />
        </div>
    )
}

export default Home
