/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Initialize CORS middleware
const cors = Cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Use environment variable or fallback
  methods: ['GET', 'POST'],
})

type MiddlewareFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (result?: any) => void
) => void

const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: MiddlewareFunction
): Promise<void> =>
  new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve()
    })
  })

// Export the middleware
export default async function corsMiddleware(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)
}
