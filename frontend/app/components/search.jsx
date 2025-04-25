import React from 'react';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import Dropdown from './dropdown';

const Search = () => {
	const bedOptions = [1, 2, 3, 4, 5];
	const bathOptions = [1, 2, 3, 4, 5];
	const [searchQuery, setSearchQuery] = useState({});

	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const handleChange = (change) => {
		setSearchQuery({ ...searchQuery, ...change });
	};
	const handleSearch = () => {
		if (Object.keys(searchQuery).length > 0) {
			const params = new URLSearchParams(searchParams);
			params.set('query', searchQuery);
			// console.log('params', params);
			router.replace(`${pathname}?${params.toString()}`);
		}
	};
	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	return (
		<>
			<label htmlFor="minSqft" className="relative">
				<input
					type="text"
					id="minSqft"
					placeholder="Sq Ft Min"
					className="mt-0.5 p-2 w-24 rounded-md border border-gray-200 shadow-sm sm:text-sm bg-white"
				/>
			</label>
			<label htmlFor="maxSqft" className="relative">
				<input
					type="text"
					id="maxSqft"
					placeholder="Sq Ft Max"
					className="mt-0.5 p-2 w-24 rounded-md border border-gray-200 shadow-sm sm:text-sm bg-white"
				/>
			</label>
			<Dropdown
				name="Beds"
				field="bedSelectedValue"
				options={bedOptions}
				handleChange={handleChange}
			/>
			<Dropdown
				name="Baths"
				field="bathSelectedValue"
				options={bathOptions}
				handleChange={handleChange}
			/>
			<Link
				className="block w-24 rounded-md bg-teal-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-teal-700 cursor-pointer"
				// href="/search"
				href={'/search' + '?' + createQueryString('sort', 'desc')}
				// onClick={handleSearch}
			>
				Search
			</Link>
		</>
	);
};

export default Search;
