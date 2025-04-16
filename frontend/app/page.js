'use client';

import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Products from './components/products';

import { getCategories } from '@/lib/sanity/category-query';
import { ProductType, CategoryType } from '@/lib/sanity/types';
import { getProducts, getSelectedProducts } from '@/lib/sanity/product-query';
import { useEffect, useState } from 'react';

export default function Home() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');

	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);

	const localStorageCartItem =
		typeof window !== 'undefined' && localStorage.getItem('cart');
	const parsedCartItems =
		localStorageCartItem && JSON.parse(localStorageCartItem);
	const itemsInCart = cartItems.length > 0 ? cartItems : parsedCartItems;

	const localStorageCartItemCount =
		typeof window !== 'undefined' && localStorage.getItem('cartCount');
	const cartCount =
		localStorageCartItemCount && JSON.parse(localStorageCartItemCount);
	const itemCount = cartItemsCount || cartCount;

	useEffect(() => {
		async function fetchProducts() {
			const allProducts = await getProducts();
			setProducts(allProducts);
		}
		fetchProducts();
	}, []);

	useEffect(() => {
		async function fetchCategories() {
			const allCategories = await getCategories();
			setCategories(allCategories);
		}
		fetchCategories();
	}, []);

	const handleDrawerOpen = () => onOpen();

	const handleProductFilter = async (category) => {
		let product = [];
		if (!!category) {
			product = await getSelectedProducts(category);
		} else {
			product = await getProducts();
		}
		setProducts(product);
		setSelectedCategory(category);
	};

	const addCartItem = (product) => {
		let cart = [];
		const count = cartCount + 1;
		const products = [];
		products.push(product);

		if (!!itemsInCart) {
			cart = [...itemsInCart, ...products];
		} else {
			cart = [...products];
		}

		setCartItems(cart);
		setCartItemsCount(count);

		updateLocalStorage(count, cart);
	};

	const removeItemFromCart = (product) => {
		const count = cartCount - 1;
		const filteredItems = itemsInCart.filter(
			(item) => item._id !== product._id
		);

		setCartItems(filteredItems);
		setCartItemsCount(count);

		updateLocalStorage(count, filteredItems);
	};

	const updateLocalStorage = (count, cart) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cartCount', JSON.stringify(count));
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	};

	return (
		<>
			{/* <Header /> */}
			<main>
				{/* <Hero
					categories={categories}
					handleProductFilter={handleProductFilter}
				/> */}
				<Products
					products={products}
					selectedCategory={selectedCategory}
					addCartItem={addCartItem}
				/>
			</main>
			{/* <Footer /> */}
		</>
	);
}
