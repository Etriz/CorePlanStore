'use client';

import { useState, Suspense } from 'react';
import SearchFilter from '../components/search-filter';
import SearchResultsComponent from '../components/search-results';

export const SearchPage = () => {
	const [searchParams, setSearchParams] = useState({});
	const [searchResults, setSearchResults] = useState([]);
	const [searchCategories, setSearchCategories] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);

	const { number, minsqft, maxsqft, beds, baths } = searchParams;

	return (
		<div className="py-8 container m-auto">
			<div className="flex flex-row justify-evenly w-xl m-auto mb-6">
				{number ? (
					<></>
				) : (
					<>
						<div className="border border-gray-400 px-3 py-2">
							Min sqft: {minsqft}
						</div>
						<div className="border border-gray-400 px-3 py-2">
							Max sqft: {maxsqft}
						</div>
						<div className="border border-gray-400 px-3 py-2">
							Beds: {beds}
						</div>
						<div className="border border-gray-400 px-3 py-2">
							Baths: {baths}
						</div>
						<button
							className="border border-red-600 px-3 py-2 cursor-pointer"
							onClick={() =>
								console.log('Filtered Results', filteredResults)
							}>
							See Filtered
						</button>
					</>
				)}
			</div>
			<div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
					<div className="bg-white rounded-md">
						<SearchFilter
							searchParams={searchParams}
							searchResults={searchResults}
							searchCategories={searchCategories}
							filteredResults={filteredResults}
							setFilteredResults={setFilteredResults}
						/>
					</div>
					<Suspense fallback={<div>Searching ...</div>}>
						<SearchResultsComponent
							setSearchParams={setSearchParams}
							filteredResults={filteredResults}
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							setSearchCategories={setSearchCategories}
						/>
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
