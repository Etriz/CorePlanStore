'use client';

import { getProductsByNumberSearch } from '@/lib/sanity/product-query';
import { getProductsByDropdownSearch } from '@/lib/sanity/product-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductItem from '../components/product-item';

export const SearchPage = () => {
	const searchParams = useSearchParams();
	const number = searchParams.get('number');
	const minsqft = searchParams.get('minsqft');
	const maxsqft = searchParams.get('maxsqft');
	const beds = searchParams.get('beds');
	const baths = searchParams.get('baths');
	// // a state to store the search results
	const [searchResults, setSearchResults] = useState([]);

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
		if (searchParams.get('number') != null) {
			async function fetchProducts() {
				const products = await getProductsByNumberSearch(number);
				setSearchResults(products);
			}
			fetchProducts();
		} else {
			console.log('search params found: ', searchParams.toString());
			async function fetchProducts() {
				const products = await getProductsByDropdownSearch(query);
				setSearchResults(products);
			}
			fetchProducts();
		}
	}, []);

	return (
		<div className="py-16 container m-auto">
			<h1>Search Params</h1>
			<p>Number: {number}</p>
			<p>Min sqft: {minsqft}</p>
			<p>Max sqft: {maxsqft}</p>
			<p>Beds: {beds}</p>
			<p>Baths: {baths}</p>
			<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-5">
				{searchResults.length > 0
					? searchResults.map((product, index) => (
							<ProductItem
								key={`${product._id}-${index}`}
								product={product}
							/>
						))
					: 'There are no plans to display'}
			</div>
		</div>
	);
};

export default SearchPage;
