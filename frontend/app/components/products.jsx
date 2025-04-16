import ProductItem from './product-item';

function Products({ products, selectedCategory, addCartItem }) {
	const localStorageCart =
		typeof window !== 'undefined' && localStorage.getItem('cart');
	const itemsInCart = localStorageCart ? JSON.parse(localStorageCart) : [];
	const cartIds = itemsInCart.map((item) => item._id) || [];

	return (
		<section className="py-16">
			<div>
				{selectedCategory && (
					<h3 className="text-lg font-bold mb-10">{`Selected Category: ${selectedCategory}`}</h3>
				)}
				<div className="grid grid-cols-1 gap-12 items-end md:grid-cols-3">
					{products.length > 0 ? (
						products.map((product, index) => (
							<ProductItem
								key={`${product._id}-${index}`}
								product={product}
								addCartItem={addCartItem}
								cartIds={cartIds}
							/>
						))
					) : (
						<p>No Products to show at the moment</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default Products;
