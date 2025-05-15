import ProductItem from './product-item';

const Products = ({ products }) => {
	const localStorageCart =
		typeof window !== 'undefined' && localStorage.getItem('cart');
	const itemsInCart = localStorageCart ? JSON.parse(localStorageCart) : [];
	const cartIds = itemsInCart.map((item) => item._id) || [];

	return (
		<section className="py-16 container m-auto">
			<div>
				<h3 className="text-lg font-bold mb-10">{`Featured Products`}</h3>
				<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-5">
					{products.length > 0 ? (
						products.map((product, index) => (
							<ProductItem
								key={`${product._id}-${index}`}
								product={product}
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
};

export default Products;
