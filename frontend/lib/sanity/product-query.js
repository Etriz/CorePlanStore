import { groq } from 'next-sanity';
import client from './client';

export async function getProducts() {
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
      width,
      depth,
      "productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current
    }`
	);
}

export async function getSelectedProducts(selectedCategory) {
	return client.fetch(
		groq`*[_type == "product" && category->name == $selectedCategory] {
      _id,
      "categoryName": category->name,
      name,
      description,
      price,
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
      "productImage": {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current}`,
		{ slug }
	);
}
