import React from 'react';
import { useState, useRef } from 'react';
import SearchFilterNumbox from './search-filter-numbox';
import SearchFilterCheckbox from './search-filter-checkbox';

const SearchFilter = ({
	searchParams,
	searchResults /*Array of Objects */,
	searchCategories,
	setFilteredResults,
}) => {
	const bedOptions = [1, 2, 3, 4, 5];
	const bathOptions = [1, 2, 3, 4, 5];
	const floors = [1, 2];

	const { minsqft, maxsqft, beds, baths } = searchParams;
	const checkboxRef = useRef([]);

	const handleStyleClick = (item) => {
		// console.log('item', item);
		console.log('checked?', checkboxRef.current.checked);
		const results = searchResults.filter(
			(e) => e.categoryName?.toString() == item?.toString()
		);
		// setFilteredResults(results);
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
					{searchCategories?.map((option, index) => (
						// <div
						// 	className="flex"
						// 	key={`${item}-${index}`}
						// 	onClick={() => handleStyleClick(item)}>
						// 	<input
						// 		type="checkbox"
						// 		id={item}
						// 		className="peer accent-teal-600"
						// 		ref={checkboxRef}
						// 	/>
						// 	<label
						// 		htmlFor={item}
						// 		className="select-none py-1 px-4 text-black">
						// 		{item}
						// 	</label>
						// </div>
						<SearchFilterCheckbox
							name="baths"
							option={option}
							paramChecked={
								option.toString() == baths?.toString()
							}
							key={`${option}-${index}`}
						/>
					))}
				</div>
				<hr className="text-gray-300" />
			</div>
		</div>
	);
};

export default SearchFilter;
