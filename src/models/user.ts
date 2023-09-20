import { DataTypes, Model, UUIDV4 } from 'sequelize'
import bcrypt from 'bcrypt-nodejs'
import { sequelize } from './init'

class User extends Model {
  declare id: string
  declare firstName: string
  declare lastName: string | null
  declare email: string
  declare phoneNumber: string
  declare password: string
  declare organizationId: string
  declare createdAt: Date
  declare isActive: boolean
}

User.init(
  {
    userID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'users_UN1',
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: 'users_UN2',
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      set(value: string) {
        this.setDataValue('password', bcrypt.hashSync(value))
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    organizationId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'organization',
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'users',
    sequelize,
    underscored: true,
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'email',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'email' }],
      },
      {
        name: 'phone_number',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'phone_number' }],
      },
      {
        name: 'users_FK',
        using: 'BTREE',
        fields: [{ name: 'organization_id' }],
      },
    ],
  }
)

export default User
