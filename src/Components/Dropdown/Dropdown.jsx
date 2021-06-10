import React, { useState } from 'react';
import './Dropdown.css';

import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Dropdown = ({ categories, selectedCategory, setSelectedCategory }) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	const handleSelectCategory = (e) => {
		setSelectedCategory(e.target.innerHTML);
	};

	return (
		<div
			className='dropdown'
			tabIndex='1'
			onBlur={() => open && setOpen(false)}
			onClick={toggleOpen}
		>
			<div className='dropdown-content'>
				{selectedCategory} {!open ? <ExpandMore /> : <ExpandLess />}
			</div>
			{open && (
				<div
					className='dropdown-results'
					onClick={handleSelectCategory}
				>
					{categories?.map((category) => (
						<p key={category._id}>{category.name}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
