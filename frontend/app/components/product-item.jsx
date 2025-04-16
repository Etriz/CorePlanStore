import Image from 'next/image';

function ProductItem({ product, addCartItem, cartIds }) {
	return (
		<div className="flex flex-col items-center border border-red-600">
			<Image
				src={product?.productImage?.imageUrl}
				alt={product?.productImage?.alt || product?.name}
				className="max-w-full max-h-[180px] h-auto"
				width="120"
				height="120"
			/>
			<p className="text-[#151615] text-sm text-center pb-0 pt-4">
				{product?.name}
			</p>
			<p className="text-[#151615] text-sm text-center pb-4 pt-0">{`$${product.price}.00`}</p>
			<button
				className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-600 hover:text-white hover:cursor-pointer focus:relative rounded border border-gray-300 bg-white shadow-sm"
				onClick={() => addCartItem(product)}>
				Add to Cart
			</button>
		</div>
	);
}

export default ProductItem;
