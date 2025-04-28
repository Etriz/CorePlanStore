'use client';

import { getProductsByNumberSearch } from '@/lib/sanity/product-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductItem from '../components/product-item';

export const SearchPage = () => {
	const searchParams = useSearchParams();
	const number = searchParams.get('number');
	const minsqft = searchParams.get('minsqft');
	const maxsqft = searchParams.get('maxsqft');
	const bedroomNum = searchParams.get('beds');
	const bathroomNum = searchParams.get('baths');
	// // a state to store the search results
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const products = await getProductsByNumberSearch(number);
			console.log(products);
			setSearchResults(products);
		}
		fetchProducts();
	}, []);

	return (
		<div className="py-16 container m-auto">
			<h1>Search Page</h1>
			<p>{number}</p>
			<p>{minsqft}</p>
			<p>{maxsqft}</p>
			<p>{bedroomNum}</p>
			<p>{bathroomNum}</p>
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
