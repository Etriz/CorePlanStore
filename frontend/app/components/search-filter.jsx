import React from 'react';
import { useState, useRef } from 'react';
import SearchFilterNumbox from './search-filter-numbox';
import SearchFilterCheckbox from './search-filter-checkbox';

const SearchFilter = ({
	searchParams,
	searchResults /*Array of Objects */,
	searchCategories,
	filteredResults,
	setFilteredResults,
}) => {
	const bedOptions = [1, 2, 3, 4, 5];
	const bathOptions = [1, 2, 3, 4, 5];
	const floors = [1, 2];

	const { minsqft, maxsqft, beds, baths } = searchParams;

	// const checkboxRef = useRef([]);
	const handleStyleClick = (item, state) => {
		console.log('item', item, 'checked?', state);
		// console.log('checkboxRef', checkboxRef);
		if (filteredResults.length == 0 && searchResults) {
			if (state == true) {
				const results = searchResults.filter(
					(e) => e.categoryName?.toString() == item?.toString()
				);
				setFilteredResults(results);
			}
		} else if (filteredResults.length > 0 && searchResults) {
			if (state == true) {
				const results = searchResults.filter(
					(e) => e.categoryName?.toString() == item?.toString()
				);
				// console.log('results', results);
				setFilteredResults([...filteredResults, ...results]);
			}
			if (state == false) {
				const results = filteredResults.filter(
					(e) => e.categoryName?.toString() != item?.toString()
				);
				// console.log('results', results);
				setFilteredResults(results);
			}
		} else console.error('something wrong!', filteredResults);
	};

	return (
		<div className="rounded-md m-2">
			<div className="rounded-md bg-gray-100 p-2">
				<h2>Filter Search Results</h2>
				<hr className="text-gray-300" />
				<h2>Beds</h2>
				<div className="flex gap-2">
					{bedOptions.map((option, index) => (
						<SearchFilterNumbox
							name="beds"
							option={option}
							paramChecked={option.toString() == beds?.toString()}
							key={`${option}-${index}`}
						/>
					))}
				</div>
				<h2>Baths</h2>
				<div className="flex gap-2">
					{bathOptions.map((option, index) => (
						<SearchFilterNumbox
							name="baths"
							option={option}
							paramChecked={
								option.toString() == baths?.toString()
							}
							key={`${option}-${index}`}
						/>
					))}
				</div>
			</div>
			<hr className="text-gray-300" />
			<div className="p-2">
				<h2>Styles</h2>
				<div className="flex flex-col">
					{searchCategories?.map((item, index) => (
						<SearchFilterCheckbox
							option={item}
							key={`${item}-${index}`}
							handleStyleClick={handleStyleClick}
						/>
					))}
				</div>
				<hr className="text-gray-300" />
			</div>
		</div>
	);
};

export default SearchFilter;
