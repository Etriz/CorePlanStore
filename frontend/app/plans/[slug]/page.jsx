'use client';
import { getProductBySlug } from '@/lib/sanity/product-query';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

function Plan() {
	const [thisProduct, setThisProduct] = useState();
	const params = useParams();

	useEffect(() => {
		async function fetchSingleProduct() {
			const thisProduct = await getProductBySlug(params.slug);
			console.log(thisProduct[0]);
			setThisProduct(thisProduct[0]);
		}
		fetchSingleProduct();
	}, []);

	return (
		<div className="container m-auto">
			<p>this is the slug page for {params.slug}</p>
			<p>Square Feet {thisProduct?.sqft}</p>
			<div className="bg-white p-4">
				<Image
					src={thisProduct?.productImage?.imageUrl}
					alt={thisProduct?.productImage?.alt || thisProduct?.name}
					className="max-w-full max-h-[200px] h-auto mb-2 m-auto"
					width="500"
					height="500"
				/>
			</div>
		</div>
	);
}

export default Plan;
