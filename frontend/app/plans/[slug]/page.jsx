'use client';
import { getProductBySlug } from '@/lib/sanity/product-query';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

function Plan() {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});
	const [thisProduct, setThisProduct] = useState();
	const [gallery, setGallery] = useState([]);
	const params = useParams();

	useEffect(() => {
		async function fetchSingleProduct() {
			const product = await getProductBySlug(params.slug);
			setThisProduct(product[0]);
			setGallery(product[0].productGallery);
		}
		fetchSingleProduct();
	}, []);

	const openLightboxOnSlide = (number) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	};

	const getLocalStorage = () => {
		if (typeof window !== undefined) {
			return JSON.parse(localStorage.getItem('cart')) || [];
		}
	};
	const updateLocalStorage = (cart) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	};

	const addItemToCart = () => {
		const localCart = getLocalStorage();
		// console.log('add item to cart', thisProduct);
		const tempObj = {
			_id: thisProduct._id,
			name: thisProduct.name,
			price: thisProduct.price,
			productId: thisProduct.productGallery[0],
			sqft: thisProduct.sqft,
		};
		localCart.push(tempObj);
		updateLocalStorage(localCart);
	};

	return (
		<>
			<div className="container max-w-5xl m-auto mt-6 px-6">
				<Link
					href=""
					className="inline-block underline"
					onClick={() => history.back()}>
					<span>Back</span>
				</Link>
			</div>
			<div className="container max-w-5xl grid grid-cols-3 m-auto mb-6">
				{/* image area */}
				<FsLightbox
					toggler={lightboxController.toggler}
					sources={gallery?.map((image) => image?.imageUrl)}
					slide={lightboxController.slide}
				/>
				<div className="grid gap-4 bg-white shadow-md p-6 m-4 col-span-2 cursor-pointer">
					<div onClick={() => openLightboxOnSlide(1)}>
						<Image
							className="h-auto w-full max-w-full rounded-md object-cover object-center h-auto m-auto aspect-4/3"
							src={gallery[0]?.imageUrl}
							alt={gallery[0]?.alt}
							width="600"
							height="450"
						/>
					</div>
					<div className="grid grid-cols-5 gap-4">
						{gallery.slice(1).map((image, index) => (
							<Image
								onClick={() => openLightboxOnSlide(index + 2)}
								key={`${image._id}-${index}`}
								className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer aspect-4/3"
								src={image?.imageUrl}
								alt={image?.alt || 'gallery-image'}
								width="600"
								height="450"
							/>
						))}
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
						Please contact us with your requested changes, and our
						team will email a free modification quote to you within
						1 to 3 business days.
					</p>
					<div className="text-2xl my-4">
						${thisProduct?.price}.00
					</div>
					<div onClick={addItemToCart}>
						<a
							className="inline-flex items-center gap-2 rounded-md border border-teal-600 bg-teal-600 px-8 py-3 w-full text-white hover:bg-teal-700 focus:ring-3 focus:outline-hidden"
							href="#">
							<span className="text-md font-medium">
								Add To Cart
							</span>

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
				</div>
				{/* features area */}
				<div className="flow-root col-span-2 p-4 mx-4 mb-6 bg-white border border-gray-300 grid grid-cols-2 gap-4 max-w-5xl shadow-md ">
					<dl className="mx-3 divide-y divide-gray-200 text-sm col-start-1">
						<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
							<dt className="font-bold text-gray-900">
								Square Feet
							</dt>
							<dd className="text-gray-700 sm:col-span-2">
								{thisProduct?.sqft}
							</dd>
						</div>
						<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
							<dt className="font-bold text-gray-900">
								Bedrooms
							</dt>
							<dd className="text-gray-700 sm:col-span-2">
								{thisProduct?.bedroomNum}
							</dd>
						</div>
						<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
							<dt className="font-bold text-gray-900">
								Bathrooms
							</dt>
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
							<dt className="font-bold text-gray-900">
								Foundation
							</dt>
							<dd className="text-gray-700 sm:col-span-2">
								{thisProduct?.foundation}
							</dd>
						</div>
					</dl>
					<dl className="mx-3 divide-y divide-gray-200 text-sm col-start-2">
						{thisProduct?.kitchen ? (
							<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
								<dt className="font-bold text-gray-900">
									Kitchen Features
								</dt>
								<dd className="text-gray-700 sm:col-span-2">
									{thisProduct?.kitchen}
								</dd>
							</div>
						) : null}
						{thisProduct?.bedroom ? (
							<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
								<dt className="font-bold text-gray-900">
									Bedroom Features
								</dt>
								<dd className="text-gray-700 sm:col-span-2">
									{thisProduct?.bedroom}
								</dd>
							</div>
						) : null}
						{thisProduct?.interior ? (
							<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
								<dt className="font-bold text-gray-900">
									Interior Features
								</dt>
								<dd className="text-gray-700 sm:col-span-2">
									{thisProduct?.interior}
								</dd>
							</div>
						) : null}
						{thisProduct?.interior ? (
							<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
								<dt className="font-bold text-gray-900">
									Exterior Features
								</dt>
								<dd className="text-gray-700 sm:col-span-2">
									{thisProduct?.exterior}
								</dd>
							</div>
						) : null}
						{thisProduct?.special ? (
							<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
								<dt className="font-bold text-gray-900">
									Special Features
								</dt>
								<dd className="text-gray-700 sm:col-span-2">
									{thisProduct?.special}
								</dd>
							</div>
						) : null}
					</dl>
				</div>
			</div>
		</>
	);
}

export default Plan;
