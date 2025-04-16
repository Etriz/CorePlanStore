export default function Hero({ categories, handleProductFilter }) {
	return (
		<div className="md:py-40 py-5" maxW="8xl">
			<SimpleGrid
				columns={[1, null, 2]}
				spacing={10}
				alignItems={'center'}>
				<h1 className="text-5xl">All Products</h1>
				<Select
					placeholder="Filter By"
					onChange={(event) =>
						handleProductFilter(event.target.value)
					}>
					{categories.map((category, index) => (
						<option
							key={`${category._id}-${index}`}
							value={category.name}>
							{category.name}
						</option>
					))}
				</Select>
			</SimpleGrid>
		</div>
	);
}
