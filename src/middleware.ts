import { NextApiResponse } from 'next'

import { NextApiRequest } from 'next'
import corsMiddleware from './middleware/corsMiddleware'

export const middleware = async (req: NextApiRequest, res: NextApiResponse) => {
  // await corsMiddleware(req, res)
}
