import React, { useCallback, useState } from 'react';
import './Search.css';

import axios from '../../../api/axios';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

const Search = () => {
	const [focused, setFocused] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const search = async (term) => {
		try {
			const response = await axios.get(`/search?cname=${term}`);
			const { categories } = response.data;

			if (categories.length === 0) {
				setSearchResults([{ _id: 0, name: 'No results found' }]);
			} else {
				setSearchResults(categories);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const debouncedSearch = useCallback(
		() => debounce((term) => search(term), 1000),
		[]
	);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
		debouncedSearch(searchTerm);
	};

	const onFocus = () => {
		setFocused(true);
	};

	const onBlur = () => {
		setFocused(false);
		setSearchTerm('');
	};

	return (
		<div className='search'>
			<input
				type='text'
				value={searchTerm}
				onChange={handleChange}
				placeholder='Search Category'
				onFocus={onFocus}
				onBlur={onBlur}
			/>

			{focused && searchResults.length > 0 && (
				<div className='search-results'>
					{searchResults.map((result) =>
						result._id !== 0 ? (
							<Link
								to={`/categories/:${result.name}`}
								key={result._id}
							>
								{result.name}
							</Link>
						) : (
							<p key={result._id}>{result.name}</p>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
