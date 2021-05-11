import React from 'react';
import './About.css';
import about1 from "../../Assets/about 1.svg";
import about2 from "../../Assets/about 2.svg"
import about3 from "../../Assets/about 3.svg"


const About = () => {
    return (
        <div className='about' id='about'>
            <h1>Why should you join us ?</h1>
            <div className="about1">
                 

                <img src={about1} alt="" className="about1_image"/>
                
                
                <div className="blue_box">
                
                    <div className="about1_info">
                        <h1>Get 1 on 1 personalised sessions with experts from your field.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis reprehenderit quos at totam enim, voluptatem quas quaerat laboriosam obcaecati similique exercitationem culpa nostrum nulla? Quam sequi odio minus illo.</p>
                    </div>
                
                </div>
            </div>
                

            <div className="about2">
                
                <div className="green_box">
                    
                    <div className="about2_info">

                        <h1>Keep everything organized with our multifunctional dashboard.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis reprehenderit quos at totam enim, voluptatem quas quaerat laboriosam obcaecati similique exercitationem culpa nostrum nulla? Quam sequi odio minus illo.</p>
                        
                    </div>

                    </div>

                    <img src={about2} alt="" className="about2_image"/>

            </div>

            <div className="about3">
                 

                <img src={about3} alt="" className="about3_image"/>
                
                
                <div className="orange_box">
                
                    <div className="about3_info">
                        <h1>Get the right guidance and reach your goals faster.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis reprehenderit quos at totam enim, voluptatem quas quaerat laboriosam obcaecati similique exercitationem culpa nostrum nulla? Quam sequi odio minus illo.</p>
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default About
