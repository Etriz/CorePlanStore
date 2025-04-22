import CategoryItem from './category-item';

const Categories = ({ categories }) => {
	return (
		<section className="py-16 container m-auto">
			<div>
				<h3 className="text-lg font-bold mb-10">Plan Styles</h3>
				<div className="grid grid-cols-1 gap-6 items-end md:grid-cols-5">
					{categories.map((category, index) => (
						<CategoryItem
							key={`${category._id}-${index}`}
							category={category}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
