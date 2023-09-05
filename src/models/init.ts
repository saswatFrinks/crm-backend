import { Sequelize } from 'sequelize'
import network from '../config/network'

export const sequelize = new Sequelize(
  `mysql://${network.DB_USER}:${network.DB_PASSWORD}@${network.DB_DOMAIN}:${network.DB_PORT}/${network.DB_NAME}`,
  {
    dialect: 'mysql',
    dialectOptions: {},
    timezone: '+05:30',
    logging: (...msg) => {
      console.log(msg)
    },
  }
)
