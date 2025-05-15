'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		async function fetchLocalStorageCart() {
			if (typeof window !== undefined) {
				const localStorageCart =
					JSON.parse(localStorage.getItem('cart')) || [];
				setCartItems(localStorageCart);
				let total = 0;
				localStorageCart.forEach((item) => {
					total += item.price;
				});
				setCartTotal(total);
			}
		}
		fetchLocalStorageCart();
	}, []);

	const updateLocalStorage = (cart) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	};

	const removeFromCart = (item) => {
		const updatedCart = cartItems.filter((ele) => ele != item);
		setCartItems(updatedCart);
		updateLocalStorage(updatedCart);
	};

	const localStorageCartItem =
		typeof window !== 'undefined' && localStorage.getItem('cart');
	const parsedCartItems =
		localStorageCartItem && JSON.parse(localStorageCartItem);
	const itemsInCart = cartItems.length > 0 ? cartItems : parsedCartItems;

	return (
		<div className="py-8 container mx-auto max-w-screen-md">
			<p>This is the cart page</p>
			<div className="border-t border-gray-300">
				{cartItems.map((item, index) => (
					<div
						key={index}
						className="grid grid-cols-4 p-4 border-b border-gray-300">
						<Image
							src={item.productId.imageUrl}
							alt={`${item.name} cart img`}
							width="100"
							height="100"
							className="rounded-md"
						/>
						<div className="items-center">
							<a
								href={`/plans/${item.name.toLowerCase()}`}
								className="font-bold underline">
								{item.name}
							</a>
							<p>{item.sqft} sqft</p>
						</div>
						<div>
							<br />
							<p>${item.price}</p>
						</div>
						<div>
							<button
								onClick={() => removeFromCart(item)}
								className="px-2 py-1/2 m-1 rounded bg-red-700 text-white cursor-pointer float-right">
								X
							</button>
						</div>
					</div>
				))}
				<p>Total: ${cartTotal}</p>
			</div>
		</div>
	);
};

export default Cart;
