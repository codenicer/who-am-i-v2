import { NextApiRequest, NextApiResponse } from 'next'
import corsMiddleware from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await corsMiddleware(req, res)

  res.status(200).json({ message: 'Hello World' })
}

export default handler
