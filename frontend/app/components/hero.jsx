'use client';

import HeroSearch from './hero-search';

export default function Hero() {
	return (
		<div className="w-full m-auto bg-[url(https://unsplash.com/photos/a-large-house-with-a-white-fence-in-front-of-it-oaKSbaRXYhw)]">
			<div className="bg-linear-to-b from-blue-200 to-purple-200 mx-auto w-screen px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
				<div className="flex row gap-4 justify-center">
					<HeroSearch />
				</div>
			</div>
		</div>
	);
}
