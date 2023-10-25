import dbConnection  from "../models/init"
import variantSchema from "../models/variant"

class VariantDAO{
    static getVariants = async () => {
       const vars =  await dbConnection.db.select().from(variantSchema)
       return vars
    }
}

export default VariantDAO