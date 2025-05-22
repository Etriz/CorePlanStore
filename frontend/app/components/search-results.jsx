'use client';
import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import ProductItem from '../components/product-item';

const SearchResultsComponent = ({
	filteredResults,
	searchResults,
	setSearchParams,
}) => {
	const params = Object.fromEntries(useSearchParams());
	useEffect(() => {
		setSearchParams(params);
	}, []);

	return (
		// <div className="lg:col-span-3">
		<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-4">
			{filteredResults.length > 0
				? filteredResults.map((product, index) => (
						<ProductItem
							key={`${product._id}-${index}`}
							product={product}
						/>
					))
				: searchResults?.length > 0
					? searchResults.map((product, index) => (
							<ProductItem
								key={`${product._id}-${index}`}
								product={product}
							/>
						))
					: 'There are no plans to display'}
		</div>
		// </div>
	);
};

export default SearchResultsComponent;
