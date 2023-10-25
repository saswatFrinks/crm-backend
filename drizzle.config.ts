import type { Config } from "drizzle-kit";
 
export default {
  driver: 'mysql2',
  dbCredentials: {
    connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}:3306/${process.env.DB_NAME}`,
  }
} satisfies Config;