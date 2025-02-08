import { Redis } from 'ioredis'

const getRedisUrl = () => {
  if (process.env.REDIS_URL_PERSONAL) {
    return process.env.REDIS_URL_PERSONAL
  }

  throw new Error('REDIS_URL is not defined')
}

export const redis = new Redis(getRedisUrl())
