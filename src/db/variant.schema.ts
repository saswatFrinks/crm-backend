import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
 
const variantSchema = mysqlTable('variants', {
  id: varchar('id', {length: 36}).primaryKey().notNull(),
  beltId: varchar('belt_id',{length: 36}).notNull(),
  name: varchar('name',{length: 255}),
  test: varchar('test', {length: 256})
});


export default variantSchema;