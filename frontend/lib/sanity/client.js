import { createClient } from '@sanity/client';

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: '2025-04-16',
	useCdn: false,
};

const client = createClient(config);

export default client;
