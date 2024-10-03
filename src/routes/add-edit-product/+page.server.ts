import { db } from '$lib/db';
import { products } from '$lib/db/schema';
import { v4 as uuidv4 } from 'uuid';
import { zfd } from 'zod-form-data';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

const schema = zfd.formData({
	name: zfd.text(),
	code: zfd.text(),
	description: zfd.text(),
	price: zfd.numeric()
});

let pageData: any;
let id = '';
export const load = async ({ url }: any) => {
	if (url.searchParams.get('id')) {
		id = url.searchParams.get('id');
		const result = await db.select().from(products).where(eq(products.id, id));
		pageData = {
			title: 'Edit Product',
			selectedProduct: result[0] ?? {}
		};
	} else {
		pageData = {
			title: 'Add Product'
		};
	}

	return pageData;
};

export const actions = {
	default: async (event) => {

		const { data }: any = schema.safeParse(await event.request.formData());
		console.log(data);

		if (!data) {
			return error(404, 'Invalid form data');
		} else {
			if (id) {
				pageData.result = await db.update(products).set({
					name: data.name,
					code: data.code,
					description: data.description,
					price: data.price,
				}).where(eq(products.id, id));
			} else {
				pageData.result = await db.insert(products).values({
					name: data.name,
					code: data.code,
					description: data.description,
					price: data.price,
					id: uuidv4(),
				});
			}

			if (pageData.result) {
				throw redirect(303, '/products');
			};

			// if (pageData.result.type === "success") {
			// 	goto("/products");
			// }
		}

		return pageData;
	}
};
