// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }



export default function handler(req : NextApiRequest, res : NextApiResponse<Data> ) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  console.log(">>>>>>");
  switch (requestMethod) {
    case 'POST':
      res.status(200).json({ message: `You submitted the following data: ${body}` })
      
    // handle other HTTP methods
    default:
      res.status(200).json({ message: 'Welcome to API Routes!'})
  }
}