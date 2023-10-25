import { drizzle } from "drizzle-orm/mysql2";
import * as mysql from "mysql2/promise";
import network from "../config/network";

class DB{
    db:  ReturnType<typeof drizzle>
    init = async () => {
        const connection = await mysql.createConnection({
              host: network.DB_DOMAIN,
              user: network.DB_USER,
              database: network.DB_NAME,
              password: network.DB_PASSWORD
            })
             
            this.db = drizzle(connection);
    }
}

const dbConnection = new DB()

export default dbConnection