import { db } from '$lib/db';
import { products } from '$lib/db/schema';

type NewProduct = typeof products.$inferInsert;

export async function load() {
	const data = await db.query.products.findMany();

	// const product: NewProduct = {
	// 	name: 'Air Freshner H2',
	// 	code: 'AFH2',
	// 	price: 200,
	// 	description: 'This is a test product',
	// 	id: uuidv4()
	// };
	//
	// const result = await db.insert(products).values(product);

	return {
		products: data ?? []
		// result
	};
}
