import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from 'postgres'
import * as schema from './schema'

const sql = postgres("postgresql://postgres.zixptoluhglwkmdqoisr:TuaBp4BhH2rnDFTh@aws-0-ap-south-1.pooler.supabase.com:6543/postgres", { max: 1 })
const db_instance = drizzle(sql);
await migrate(db_instance, { migrationsFolder: "drizzle" });
await sql.end();

const client = postgres("postgresql://postgres.zixptoluhglwkmdqoisr:TuaBp4BhH2rnDFTh@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")
export const db = drizzle(client, {schema});
