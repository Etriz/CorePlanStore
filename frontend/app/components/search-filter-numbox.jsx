import React from 'react';
import { useState } from 'react';

const SearchFilterNumbox = ({ name, option, paramChecked, handleClick }) => {
	const [checked, setChecked] = useState(paramChecked);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<div className="flex">
			<input
				type="checkbox"
				id={`${name}${option}`}
				className="peer hidden"
				checked={checked}
				onChange={handleChange}
				onClick={() => handleClick(!checked)}
			/>
			<label
				htmlFor={`${name}${option}`}
				className="select-none cursor-pointer rounded-md border-1 border-gray-300
				py-1 px-4 text-black bg-white transition-colors duration-200 ease-in-out peer-checked:bg-teal-600 peer-checked:text-white peer-checked:border-teal-600">
				{option}
			</label>
		</div>
	);
};

export default SearchFilterNumbox;
