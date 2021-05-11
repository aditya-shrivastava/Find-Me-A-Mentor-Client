import React from 'react';
import './Header.css';
import FeaturedMentor from '../FeaturedMentor/FeaturedMentor'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import img1 from '../../Assets/Group 4.svg'
import img2 from '../../Assets/Group 5.svg'


const Header = () => {
    return (
        <React.Fragment>
            <div className="header" id='header'>
                <img src= {img2} alt="bg-svg" className="img2"/>
                <div className='Introduction'>
                    <h1>
                        Confused about your next move?
                    </h1>
                    <p>SignUp and get a personalized session with experts from your field</p>
                        
                    <div className="drop-down">
                        <span className="select">
                        <select name="Select Category" id="categories">
                        <option>Select Category</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        </select>
                        </span>
                        
                        <Button type= "submit">
                        Find Mentor
                        </Button>
                    </div>  
                    <img src={img1} alt="bg-svg" className="img1"/>  
                    </div>
                
                <FeaturedMentor />
            </div>
        </React.Fragment>
    )
}

export default Header
