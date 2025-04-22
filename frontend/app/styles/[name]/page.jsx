'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getAllProductsByCategory } from '@/lib/sanity/product-query';
import ProductItem from '@/app/components/product-item';

const Style = () => {
	const { name } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const allProducts = await getAllProductsByCategory(name);
			setProducts(allProducts);
		}
		fetchProducts();
	}, []);

	return (
		<section className="py-16 container m-auto">
			<div>
				<h3 className="text-lg font-bold mb-10">{name} Style Plans</h3>
				<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-5">
					{products.length > 0 ? (
						products.map((product, index) => (
							<ProductItem
								key={`${product._id}-${index}`}
								product={product}
							/>
						))
					) : (
						<p>No Products to show at the moment</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default Style;
