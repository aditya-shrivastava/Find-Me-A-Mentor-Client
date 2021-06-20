import React from 'react';
import "./OurteamData.css";

import BackGround from "../../Assets/Group 18303.svg"
import AdityaImg from "../../Assets/Aditya.jpeg"
import AbhinavImg from "../../Assets/Abhinav.jpeg"
import RiddhiImg from "../../Assets/Riddhi.jpg"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


function OurteamData() {
    return (
        <main className="OurTeam__container">
            
            <div className="background__image">
                <img src={BackGround} alt="" />
            </div>

            <div className="ourteam__header" >
                <h1>Our <span>Team</span></h1>
            </div>

            <section className="left__style">

                <img src={AdityaImg} alt="Aditya's Img" />

                <div className="info">
                    <div className="team__details">
                        <h3>Aditya <span>Shivastava</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ex repudiandae aut iusto repellendus eaque sequi doloribus perferendis quisquam quam! A quis amet laborum ipsa illum error dignissimos, impedit omnis?</p>
                        
                        <div className="social__links">
                            <a href="https://github.com/aditya-shrivastava" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/aditya-shrivastava-8a4ab0155/" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <LinkedInIcon />
                            </a>
                            <a href="https://twitter.com/notrealaditya" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <TwitterIcon />
                            </a>
                        </div>
                    </div>
                </div>

                    
            </section>

            <section className="right__style">

                <div className="info">
                    <div className="team__details">
                        <h3>Riddhi <span>Pal</span></h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere quibusdam quas reiciendis autem harum culpa, tenetur illum ut voluptate.</p>

                        <div className="social__links">
                            <a href="https://github.com/riddhi26pal99" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/riddhi-pal-a52350156/" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <LinkedInIcon />
                            </a>
                            <a href="https://twitter.com/pal_riddhi" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <TwitterIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <img src={RiddhiImg} alt="Riddhi's Img" />
                
            </section>
            <section className="left__style">

                <img src={AbhinavImg} alt="Abhinav's Img" />

                <div className="info">
                    <div className="team__details">
                        <h3>Abhinav <span>Kumar Chowdhury</span></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi ducimus deserunt? Fugiat, in ab facilis atque provident alias eius!</p>    

                        <div className="social__links">
                            <a href="https://github.com/AbhinavAKC" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/abhinav-kumar-choudhary-38024a166/" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <LinkedInIcon />
                            </a>
                            <a href="https://twitter.com/abhinav212001" 
                                target="_blank" rel="noopener noreferrer" 
                                className="link__style"
                            >  
                                    <TwitterIcon />
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default OurteamData
