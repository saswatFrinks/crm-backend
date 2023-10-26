import db  from "../db/init"
import Variant, {variantSchema} from "../db/variant.schema"

class VariantDAO{
    static getVariants = async ():Promise<Variant[]> => {
       const vars =  await db.select().from(variantSchema)
       return vars
    }
}

export default VariantDAO