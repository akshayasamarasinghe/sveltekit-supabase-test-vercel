import { db } from '$lib/db';
import { products } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

const pageData: any = {};
let id = '';
export const load = async ({ params }) => {
	id = params.id;
	const result = await db.select().from(products).where(eq(products.id, id));
	return {
		selectedProduct: result[0] ?? {}
	};
};
