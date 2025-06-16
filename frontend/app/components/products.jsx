import ProductItem from './product-item';

const Products = ({ products }) => {
	return (
		<section className="py-16 container m-auto">
			<div>
				<h3 className="text-lg font-bold mb-10">Featured Products</h3>
				<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-5">
					{products.length > 0 ? (
						products
							.map((value) => ({ value, sort: Math.random() }))
							.sort((a, b) => a.sort - b.sort)
							.map(({ value }) => value)
							.slice(0, 5)
							.map((product, index) => (
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

export default Products;
