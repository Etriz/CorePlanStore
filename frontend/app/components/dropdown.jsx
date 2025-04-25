import React from 'react';
import { useState } from 'react';

const Dropdown = ({ name, field, options, handleChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(name);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleOptionClick = (change) => {
		setSelectedValue(change);
		handleChange({ [field]: change });
		setIsOpen(false);
	};

	return (
		<div className="relative inline-flex w-24">
			<span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm w-24">
				<button
					type="button"
					className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs cursor-pointer"
					id="baths-menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={handleToggle}>
					{selectedValue}
					<svg
						className="-mr-1 size-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon">
						<path
							fillRule="evenodd"
							d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</span>
			<div
				role="menu"
				className="absolute end-0 top-10 z-auto w-24 overflow-hidden rounded-md border border-gray-300 bg-white shadow "
				id="menu"
				hidden={!isOpen}>
				{options.map((option, index) => (
					<a
						key={index}
						href="#"
						role="menuitem"
						className="block px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-600 hover:text-white"
						onClick={() => handleOptionClick(option)}>
						{option}
					</a>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
