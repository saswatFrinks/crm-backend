import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from 'drizzle-orm/mysql2/migrator';
import * as mysql from "mysql2/promise";
import network from "../config/network";

const connection = await mysql.createConnection({
    host: network.DB_DOMAIN,
    user: network.DB_USER,
    database: network.DB_NAME,
    password: network.DB_PASSWORD
  })
   
const db = drizzle(connection);

try {
    await migrate(db, { migrationsFolder: './migrations' });
} catch (error) {
    console.log("migration failed")
    console.log(error)
}



export default db