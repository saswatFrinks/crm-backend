import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

class Variant{
  id: string
  beltId: string
  name: string
}
 
export const variantSchema = mysqlTable('variants', {
  id: varchar('id', {length: 36}).primaryKey().notNull(),
  beltId: varchar('belt_id',{length: 36}).notNull(),
  name: varchar('name',{length: 255}),
});


export default Variant;