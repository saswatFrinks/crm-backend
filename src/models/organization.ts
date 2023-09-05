import { DataTypes, Model } from 'sequelize'
import { sequelize } from './init'

class Organization extends Model {
  declare id: string
  declare organizationName: string
}

Organization.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    organizationName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: 'organization',
    underscored: true,
    sequelize,
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
    ],
  }
)

export default Organization
