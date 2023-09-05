import Organization from './organization'
import User from './user'

class DBRelation {
  static init(): void {
    console.log('declaring db relations')
    User.belongsTo(Organization, {
      as: 'organization',
      foreignKey: 'organization_id',
    })
    Organization.hasMany(User, {
      as: 'users',
      foreignKey: 'organization_id',
    })
    console.log('declared db relations')
  }
}

export default DBRelation
