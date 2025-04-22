'use client';
import { getProductBySlug } from '@/lib/sanity/product-query';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Modal from '@/app/components/modal';

function Plan() {
	const [thisProduct, setThisProduct] = useState();
	const params = useParams();

	useEffect(() => {
		async function fetchSingleProduct() {
			const thisProduct = await getProductBySlug(params.slug);
			// console.log(thisProduct[0]);
			setThisProduct(thisProduct[0]);
		}
		fetchSingleProduct();
	}, []);

	return (
		<div className="container max-w-5xl grid grid-cols-3 m-auto mt-6 mb-6">
			{/* image area */}
			<div className="grid gap-4 bg-white shadow-md p-6 m-4 col-span-2">
				<div>
					<Image
						className="h-auto w-full max-w-full rounded-md object-cover object-center h-auto m-auto aspect-4/3"
						src={thisProduct?.productImage?.imageUrl}
						alt={
							thisProduct?.productImage?.alt || thisProduct?.name
						}
						width="600"
						height="600"
					/>
				</div>
				<div className="grid grid-cols-5 gap-4">
					<div onClick={() => console.log('click')}>
						<img
							src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
							className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
							alt="gallery-image"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
							className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
							alt="gallery-image"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
							className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
							alt="gallery-image"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
							className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
							alt="gallery-image"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
							className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
							alt="gallery-image"
						/>
					</div>
				</div>
			</div>
			{/* buy area */}
			<div className="max-h-fit p-6 m-4 bg-white border border-gray-300">
				<div className="text-2xl font-bold">
					Plan {thisProduct?.name}
				</div>
				<hr className="border-gray-300 my-2" />
				<p className="font-bold mb-2">Want to modify this plan?</p>
				<p>
					Please contact us with your requested changes, and our team
					will email a free modification quote to you within 1 to 3
					business days.
				</p>
				<div className="text-2xl my-4">${thisProduct?.price}.00</div>
				<a
					className="inline-flex items-center gap-2 rounded-md border border-teal-600 bg-teal-600 px-8 py-3 w-full text-white hover:bg-teal-700 focus:ring-3 focus:outline-hidden"
					href="#">
					<span className="text-md font-medium"> Add To Cart </span>

					<svg
						className="size-5 rtl:rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</div>
			{/* features area */}
			<div className="flow-root p-4 m-4 bg-white border border-gray-300">
				<dl className="my-3 divide-y divide-gray-200 text-sm">
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">Square Feet</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.sqft}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">Bedrooms</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.bedroomNum}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">Bathrooms</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.bathroomNum}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">Width</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.width} ft
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">Depth</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.depth} ft
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">Foundation</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.foundation}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">
							Kitchen Features
						</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.kitchen}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">
							Bedroom Features
						</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.bedroom}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">
							Interior Features
						</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.interior}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">
							Exterior Features
						</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.exterior}
						</dd>
					</div>
					<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
						<dt className="font-bold text-gray-900">
							Special Features
						</dt>
						<dd className="text-gray-700 sm:col-span-2">
							{thisProduct?.special}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}

export default Plan;
