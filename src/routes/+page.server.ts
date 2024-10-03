import { db } from '$lib/db';
import { sql } from 'drizzle-orm';

export async function load() {
	const users = await db.query.users.findMany();
	return {
		users
	};
}
