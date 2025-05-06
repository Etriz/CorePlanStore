'use client';

import { getProductsByNumberSearch } from '@/lib/sanity/product-query';
import { getProductsByDropdownSearch } from '@/lib/sanity/product-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductItem from '../components/product-item';
import SearchFilter from '../components/search-filter';

export const SearchPage = () => {
	const searchParams = Object.fromEntries(useSearchParams());
	const number = searchParams.number;
	const minsqft = searchParams.minsqft;
	const maxsqft = searchParams.maxsqft;
	const beds = searchParams.beds;
	const baths = searchParams.baths;

	const [searchResults, setSearchResults] = useState([]);
	const [searchCategories, setSearchCategories] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);

	const query = `*[_type == "product" ${minsqft ? ` && sqft > ${minsqft}` : ''}${maxsqft ? ` && sqft < ${maxsqft}` : ''}${beds ? ` && bedroomNum == ${beds}` : ''} ${baths ? ` && bathroomNum == ${baths}` : ''}] {     
		_id,
		"categoryName": category->name,
		name,
		sqft,
		floors,
		bedroomNum,
		bathroomNum,
		garageNum,
		"productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
		"slug": slug.current}`;

	const saveState = (search) => {
		setSearchResults(search);
		const tempSet = new Set();
		for (const item of search) {
			tempSet.add(item.categoryName);
		}
		const tempArray = Array.from(tempSet);
		setSearchCategories(tempArray);
	};

	useEffect(() => {
		if (searchParams.number != null) {
			async function fetchProducts() {
				const products = await getProductsByNumberSearch(number);
				saveState(products);
			}
			fetchProducts();
		} else {
			async function fetchProducts() {
				const products = await getProductsByDropdownSearch(query);
				saveState(products);
			}
			fetchProducts();
		}
	}, []);

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
			<div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
				<div className="bg-white rounded-md">
					<SearchFilter
						searchResults={searchResults}
						searchParams={searchParams}
						searchCategories={searchCategories}
						filteredResults={filteredResults}
						setFilteredResults={setFilteredResults}
					/>
				</div>
				<div className="lg:col-span-3">
					<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-4">
						{filteredResults.length > 0
							? filteredResults.map((product, index) => (
									<ProductItem
										key={`${product._id}-${index}`}
										product={product}
									/>
								))
							: searchResults.length > 0
								? searchResults.map((product, index) => (
										<ProductItem
											key={`${product._id}-${index}`}
											product={product}
										/>
									))
								: 'There are no plans to display'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
