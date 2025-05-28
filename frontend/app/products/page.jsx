'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllProducts } from '@/lib/sanity/product-query';
import ProductItem from '../components/product-item';

const allProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function fetchProducts() {
			const allProducts = await getAllProducts();
			setProducts(allProducts);
		}
		fetchProducts();
	}, []);

	const localStorageCart =
		typeof window !== 'undefined' && localStorage.getItem('cart');
	const itemsInCart = localStorageCart ? JSON.parse(localStorageCart) : [];
	const cartIds = itemsInCart.map((item) => item._id) || [];

	return (
		<div className="py-8 container mx-auto max-w-screen-xl">
			This is the allProducts page
			<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-5">
				{products.map((product, index) => (
					<ProductItem
						key={`${product._id}-${index}`}
						product={product}
						cartIds={cartIds}
					/>
				))}
			</div>
		</div>
	);
};

export default allProducts;
