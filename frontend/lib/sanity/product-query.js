import { groq } from 'next-sanity';
import client from './client';

export async function getAllProducts() {
	return client.fetch(
		groq`*[_type == "product"] {
      _id,
      "categoryName": category->name,
      name,
      sqft,
      floors,
      bedroomNum,
      bathroomNum,
      garageNum,
      "productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current
    }`
	);
}

export async function getAllProductsByCategory(selectedCategory) {
	return client.fetch(
		groq`*[_type == "product" && category->name == $selectedCategory] {
      _id,
      "categoryName": category->name,
      name,
      sqft,
      floors,
      bedroomNum,
      bathroomNum,
      garageNum,
      "productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current
    }`,
		{ selectedCategory }
	);
}

export async function getProductBySlug(slug) {
	return client.fetch(
		groq`*[_type == "product" && slug.current == $slug] {     
      _id,
      "categoryName": category->name,
      name,
      sqft,
      floors,
      bedroomNum,
      bathroomNum,
      garageNum,
      width,
      depth,
      foundation,
      kitchen,
      bedroom,
      interior,
      exterior,
      special,
      price,
      "productGallery": images[]{alt,"imageUrl":asset->url},
      "slug": slug.current}`,
		{ slug }
	);
}

export async function getProductsByNumberSearch(number) {
	return client.fetch(
		groq`*[_type == "product" && name match $number] {     
      _id,
      "categoryName": category->name,
      name,
      sqft,
      floors,
      bedroomNum,
      bathroomNum,
      garageNum,
      "productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current}`,
		{ number }
	);
}

export async function getProductsByDropdownSearch(query) {
	return client.fetch(query);
}
