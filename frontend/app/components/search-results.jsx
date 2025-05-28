'use client';
import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { getProductsByNumberSearch } from '@/lib/sanity/product-query';
import { getProductsByDropdownSearch } from '@/lib/sanity/product-query';

import ProductItem from '../components/product-item';

const SearchResultsComponent = ({
	setSearchParams,
	searchResults,
	setSearchResults,
	setSearchCategories,
	filteredResults,
}) => {
	const params = Object.fromEntries(useSearchParams());
	const { number, minsqft, maxsqft, beds, baths } = params;

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

	useEffect(() => {
		setSearchParams(params);
	}, []);

	useEffect(() => {
		if (params?.number != null) {
			async function fetchProducts() {
				const products = await getProductsByNumberSearch(
					params?.number
				);
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

	const saveState = (search) => {
		setSearchResults(search);
		const tempSet = new Set();
		for (const item of search) {
			tempSet.add(item.categoryName);
		}
		const tempArray = Array.from(tempSet);
		setSearchCategories(tempArray);
	};

	return (
		<div className="col-span-3">
			<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-4">
				{filteredResults.length > 0 ? (
					filteredResults.map((product, index) => (
						<ProductItem
							key={`${product._id}-${index}`}
							product={product}
						/>
					))
				) : searchResults?.length > 0 ? (
					searchResults.map((product, index) => (
						<ProductItem
							key={`${product._id}-${index}`}
							product={product}
						/>
					))
				) : (
					<div>No results found</div>
				)}
			</div>
		</div>
	);
};

export default SearchResultsComponent;
