import React, { useCallback, useState } from 'react';
import './Search.css';

import api from '../../../api';
import debounce from 'lodash.debounce';

import { useHistory } from 'react-router-dom';

import { SearchOutlined } from '@material-ui/icons';

const Search = () => {
	const [showResults, setShowResults] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const pathName = window.location.href.split('/').splice(-1);
	console.log(pathName);

	const history = useHistory();

	const search = async (term) => {
		try {
			const response = await api.get(`/search?cname=${term}`);
			const { categories } = response.data;

			if (categories.length === 0) {
				setSearchResults([{ _id: 0, name: 'No results found' }]);
			} else {
				setSearchResults(categories);
			}
			setShowResults(true);
		} catch (error) {
			console.error(error);
		}
	};

	const debouncedSearch = useCallback(
		debounce((term) => search(term), 1000),
		[]
	);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
		if (e.target.value !== '') {
			debouncedSearch(e.target.value);
		}
	};

	const handleBlur = (e) => {
		const currentTarget = e.currentTarget;

		setTimeout(() => {
			if (!currentTarget.contains(document.activeElement)) {
				setShowResults(false);
			}
		}, 0);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchTerm !== '') {
			debouncedSearch(searchTerm);
		}
	};

	const handleSelectCategory = (cname) => {
		if (cname) {
			history.push(`/categories/${cname}`);
			setShowResults(false);
		}
	};

	return (
		<div className='search' tabIndex='1' onBlur={handleBlur}>
			<form className={(pathName[0] === "team") ? "team__search-form" : 'search-form'} onSubmit={handleSearch}>
				<input
					type='text'
					value={searchTerm}
					onChange={handleChange}
					placeholder='Search Category'
				/>
				<button type='submit'>
					<SearchOutlined />
				</button>
			</form>

			{showResults && (
				<div className='search-results'>
					{searchResults?.map((result) =>
						result._id !== 0 ? (
							<p
								className='search-link'
								onClick={() =>
									handleSelectCategory(result.name)
								}
								key={result._id}
							>
								{result.name}
							</p>
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
