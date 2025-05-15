import React from 'react';
import { useState } from 'react';

const SearchFilterCheckbox = ({ option, handleClick }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};
	return (
		<div className="flex">
			<input
				type="checkbox"
				id={option}
				className="peer accent-teal-600"
				checked={checked}
				onChange={handleChange}
				onClick={() => handleClick(option, !checked)}
			/>
			<label
				htmlFor={option}
				className="select-none cursor-pointer py-1 px-4">
				{option}
			</label>
		</div>
	);
};

export default SearchFilterCheckbox;
