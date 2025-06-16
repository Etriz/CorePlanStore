'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		async function fetchLocalStorageCart() {
			if (typeof window !== 'undefined') {
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

	const updateLocalStorage = (cart, count) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(cart));
			localStorage.setItem('cartCount', JSON.stringify(count));
		}
	};

	const removeFromCart = (item) => {
		const updatedCart = cartItems.filter((ele) => ele != item);
		setCartItems(updatedCart);
		setCartTotal(cartTotal - item.price);
		updateLocalStorage(updatedCart, updatedCart.length);
	};

	// const localStorageCartItem =
	// 	typeof window !== 'undefined' && localStorage.getItem('cart');
	// const parsedCartItems =
	// 	localStorageCartItem && JSON.parse(localStorageCartItem);
	// const itemsInCart = cartItems.length > 0 ? cartItems : parsedCartItems;

	return (
		<div className="py-8 container mx-auto max-w-screen-md">
			{/* <svg
				className="animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 48 48"
				id="Motion-Photos-On--Streamline-Sharp-Material"
				height={48}
				width={48}>
				<path
					fill="oklch(60% 0.118 184.704)"
					d="M24 44c-2.7667 0 -5.3667 -0.525 -7.8 -1.575 -2.4333 -1.05 -4.55 -2.475 -6.35 -4.275 -1.8 -1.8 -3.225 -3.9167 -4.275 -6.35C4.525 29.3667 4 26.7667 4 24c0 -1.4 0.13333 -2.7583 0.4 -4.075s0.68333 -2.6083 1.25 -3.875L7.9 18.3c-0.26667 0.9333 -0.48333 1.8747 -0.65 2.824C7.08333 22.0733 7 23.032 7 24c0 4.7457 1.64683 8.7655 4.9405 12.0595C15.2345 39.3532 19.2543 41 24 41c4.746 0 8.7658 -1.6468 12.0595 -4.9405C39.3532 32.7655 41 28.7457 41 24c0 -4.746 -1.6483 -8.7658 -4.945 -12.0595C32.7587 8.64683 28.7355 7 23.9855 7c-0.957 0 -1.9108 0.07933 -2.8615 0.238 -0.9507 0.159 -1.892 0.37967 -2.824 0.662L16 5.6c1.2667 -0.46667 2.5417 -0.85 3.825 -1.15C21.1083 4.15 22.4333 4 23.8 4c2.7787 0 5.39 0.525 7.834 1.575 2.444 1.05 4.5818 2.475 6.4135 4.275 1.8313 1.8 3.2813 3.9167 4.35 6.35C43.4658 18.6333 44 21.2333 44 24s-0.525 5.3667 -1.575 7.8c-1.05 2.4333 -2.475 4.55 -4.275 6.35 -1.8 1.8 -3.9167 3.225 -6.35 4.275C29.3667 43.475 26.7667 44 24 44ZM10.644 13.05c-0.696 0 -1.28567 -0.2437 -1.769 -0.731 -0.48333 -0.4873 -0.725 -1.079 -0.725 -1.775s0.24367 -1.28567 0.731 -1.769c0.48733 -0.48333 1.079 -0.725 1.775 -0.725s1.2857 0.24367 1.769 0.731c0.4833 0.48733 0.725 1.079 0.725 1.775s-0.2437 1.2857 -0.731 1.769c-0.4873 0.4833 -1.079 0.725 -1.775 0.725Z"
					strokeWidth={3}
				/>
			</svg> */}
			{cartItems.length > 0 ? (
				<div className="border-t border-gray-300">
					{cartItems.map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-4 p-4 border-b border-gray-300 bg-white">
							<Image
								src={item.productId.imageUrl}
								alt={`${item.name} cart img`}
								width="100"
								height="100"
								className="rounded-md aspect-4/3"
							/>
							<div className="items-center">
								<a
									href={`/plans/${item.name.toLowerCase()}`}
									className="font-bold underline">
									Plan {item.name}
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
									className="px-2 py-1/2 m-1 rounded bg-red-700 text-white cursor-pointer float-right hover:bg-red-800">
									X
								</button>
							</div>
						</div>
					))}
					<br />
					<p>Total: ${cartTotal}</p>
				</div>
			) : (
				<p>There are no items in your cart.</p>
			)}
		</div>
	);
};

export default Cart;
