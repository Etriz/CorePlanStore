'use client';
import Image from 'next/image';
import Link from 'next/link';

const CategoryItem = ({ category }) => {
	return (
		<Link href={`/styles/${category?.name}`} category={category}>
			<div className="flex flex-col items-left bg-white p-5 rounded-md shadow-md hover:cursor-pointer hover:scale-105 transition-all">
				<Image
					src={category?.imageUrl}
					alt={category?.name}
					className="max-w-full max-h-[200px] h-auto mb-2 m-auto aspect-square object-cover object-top"
					width="300"
					height="300"
				/>
				<div className="flex flex-col">
					<p className="text-xl text-[#151615]">{category?.name}</p>
				</div>
			</div>
		</Link>
	);
};

export default CategoryItem;
