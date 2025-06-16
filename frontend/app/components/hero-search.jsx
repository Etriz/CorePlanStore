import React from 'react';
import { useState } from 'react';

import Dropdown from './dropdown';

const HeroSearch = () => {
	const bedOptions = [1, 2, 3, 4, 5, 6];
	const bathOptions = [1, 2, 3, 4, 5, 6];
	const [minSqft, setMinSqft] = useState('');
	const [maxSqft, setMaxSqft] = useState('');
	const [searchQuery, setSearchQuery] = useState({});

	const handleDropdownChange = (change) => {
		setSearchQuery({ ...searchQuery, ...change });
	};
	const objectToQueryString = (obj) => {
		const params = [];
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				params.push(
					`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
				);
			}
		}
		return params.join('&');
	};

	return (
		<>
			<label htmlFor="minSqft" className="relative">
				<input
					type="text"
					id="minSqft"
					placeholder="Sq Ft Min"
					className="mt-0.5 p-2 w-24 rounded-md border border-gray-200 shadow-sm sm:text-sm bg-white"
					value={minSqft}
					onChange={(e) => {
						setMinSqft(e.target.value);
						handleDropdownChange({ minsqft: e.target.value });
					}}
				/>
			</label>
			<label htmlFor="maxSqft" className="relative">
				<input
					type="text"
					id="maxSqft"
					placeholder="Sq Ft Max"
					className="mt-0.5 p-2 w-24 rounded-md border border-gray-200 shadow-sm sm:text-sm bg-white"
					value={maxSqft}
					onChange={(e) => {
						setMaxSqft(e.target.value);
						handleDropdownChange({ maxsqft: e.target.value });
					}}
				/>
			</label>
			<Dropdown
				name="Beds"
				options={bedOptions}
				handleChange={handleDropdownChange}
			/>
			<Dropdown
				name="Baths"
				options={bathOptions}
				handleChange={handleDropdownChange}
			/>
			<a
				className="block w-24 rounded-md bg-violet-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-teal-700 cursor-pointer"
				href={`/search?${objectToQueryString(searchQuery)}`}>
				Search
			</a>
		</>
	);
};

export default HeroSearch;
