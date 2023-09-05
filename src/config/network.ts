import { config } from 'dotenv'

const network = {
  PORT: 9000,
  JWT_EXPIRATION: '',
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_DOMAIN: process.env.DB_DOMAIN,
  REDIS_ENDPOINT: process.env.REDIS_ENDPOINT,
  REDIS_PORT: process.env.REDIS_PORT,
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  AWSBucketName: process.env.AWSBucketName,
  AWS_SERVER_BASE_ADDRESS: process.env.AWS_SERVER_BASE_ADDRESS,
  BASE_PATH: process.cwd(),
  BELT_TRIGGER_DELAY: new Map<string, number>(),
  REJECTED_ALERT_COUNT: new Map<string, number>(),
  SHIFT_RANGE: [1, 2, 3, 4],
  ORGANIZATION_ID: 1,
  YOLO_COCO_YAML: '',
  BISCUIT_DETECTION_MODEL: '',
  CLASSIFICATION_MODEL: '',
}

export default network
