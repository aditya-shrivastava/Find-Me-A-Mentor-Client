import React, { useEffect, useState } from 'react';
import './Header.css';

import api from '../../api';
import { useHistory } from 'react-router';

import FeaturedMentor from '../FeaturedMentor/FeaturedMentor';
import Dropdown from '../Dropdown/Dropdown';

import { Button } from '@material-ui/core';
import img1 from '../../Assets/Group 4.svg';
import img2 from '../../Assets/Group 5.svg';

const Header = () => {
	const history = useHistory();
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('Select Category');

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await api.get('/categories/');
				setCategories(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, []);

	const handleSelectCategory = () => {
		if (selectedCategory) {
			history.push(`/categories/${selectedCategory}`);
		}
	};

	return (
		<React.Fragment>
			<div className='header' id='header'>
				<img src={img2} alt='bg-svg' className='img2' />
				<div className='Introduction'>
					<h1>Confused about your next move?</h1>
					<p>
						SignUp and get a personalized session with experts from
						your field
					</p>

					<div className='header-cta'>
						<Dropdown
							categories={categories}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
						<Button onClick={handleSelectCategory}>
							Find Mentor
						</Button>
					</div>
					<img src={img1} alt='bg-svg' className='img1' />
				</div>

				<FeaturedMentor />
			</div>
		</React.Fragment>
	);
};

export default Header;
