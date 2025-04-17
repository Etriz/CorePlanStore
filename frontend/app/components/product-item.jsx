'use client';
import Image from 'next/image';
import Link from 'next/link';

function ProductItem({ product, addCartItem, cartIds }) {
	return (
		<Link href={`/plans/${product.slug}`}>
			<div className="flex flex-col items-left bg-white p-5 rounded-md shadow-md hover:cursor-pointer hover:scale-105 transition-all">
				<Image
					src={product?.productImage?.imageUrl}
					alt={product?.productImage?.alt || product?.name}
					className="max-w-full max-h-[200px] h-auto mb-2 m-auto"
					width="500"
					height="500"
				/>
				<div className="flex flex-col">
					<p className="text-xl text-[#151615]">{product?.name}</p>
					<br />
					<div className="flex flex-row justify-between">
						<p className="text-[#151615]">Square Feet</p>
						<p className="text-[#151615]">{product?.sqft}</p>
					</div>
					<hr className="border-gray-300" />
					<div className="flex flex-row justify-between">
						<p className="text-[#151615]">Bedrooms</p>
						<p className="text-[#151615]">{product?.bedroomNum}</p>
					</div>
					<hr className="border-gray-300" />
					<div className="flex flex-row justify-between">
						<p className="text-[#151615]">Bathrooms</p>
						<p className="text-[#151615]">{product?.bathroomNum}</p>
					</div>
					<hr className="border-gray-300" />
					<div className="flex flex-row justify-between">
						<p className="text-[#151615]">Garage</p>
						<p className="text-[#151615]">{product?.garageNum}</p>
					</div>
					<hr className="border-gray-300" />
					<div className="flex flex-row justify-between">
						<p className="text-[#151615]">Floors</p>
						<p className="text-[#151615]">{product?.floors}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductItem;
