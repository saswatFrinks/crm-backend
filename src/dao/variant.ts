import db  from "../db/init"
import variantSchema from "../db/variant.schema"

class VariantDAO{
    static getVariants = async () => {
       const vars =  await db.select().from(variantSchema)
       return vars
    }
}

export default VariantDAO