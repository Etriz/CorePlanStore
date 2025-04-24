import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Dropdown from './dropdown';

export default function Hero({ categories, handleProductFilter }) {
	// const [bedSelectedValue, setBedSelectedValue] = useState(null);
	// const [bathSelectedValue, setBathSelectedValue] = useState(null);
	const emptyState = {
		minSqft: null,
		maxSqft: null,
		bedSelectedValue: null,
		bathSelectedValue: null,
	};
	const [searchQuery, setSearchQuery] = useState(emptyState);

	const bedOptions = [1, 2, 3, 4, '5+'];
	const bathOptions = [1, 2, 3, 4, '5+'];

	const router = useRouter();
	const handleChange = (change) => {
		setSearchQuery({ ...searchQuery, ...change });
	};
	const handleSearch = () => {
		console.log(searchQuery);
		// if (searchQuery !== emptyState) {
		// 	return router.push(`/?=${searchQuery}`);
		// }
	};

	return (
		<div className="w-full m-auto bg-[url(https://unsplash.com/photos/a-large-house-with-a-white-fence-in-front-of-it-oaKSbaRXYhw)]">
			<div className="bg-linear-to-b from-red-300 to-orange-300 mx-auto w-screen px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
				<div className="flex row gap-4 justify-center">
					<label htmlFor="minSqft" className="relative">
						<input
							type="text"
							id="minSqft"
							placeholder="Sq Ft Min"
							className="mt-0.5 p-2 w-24 rounded-md border border-gray-200 shadow-sm sm:text-sm bg-white"
						/>
					</label>
					<label htmlFor="maxSqft" className="relative">
						<input
							type="text"
							id="maxSqft"
							placeholder="Sq Ft Max"
							className="mt-0.5 p-2 w-24 rounded-md border border-gray-200 shadow-sm sm:text-sm bg-white"
						/>
					</label>
					<Dropdown
						name="Beds"
						field="bedSelectedValue"
						options={bedOptions}
						handleChange={handleChange}
					/>
					<Dropdown
						name="Baths"
						field="bathSelectedValue"
						options={bathOptions}
						handleChange={handleChange}
					/>
					<Link
						className="block w-24 rounded-md bg-teal-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
						href="#"
						// href={`/search/?=${searchQuery}`}
						// href={pathname + '?' + searchQuery('sort', 'desc')}
						onClick={handleSearch}>
						Search
					</Link>
				</div>
			</div>
		</div>
	);
}
