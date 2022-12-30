import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
message: string,
}

export default function handler(req : NextApiRequest, res: NextApiResponse<Data>) {
    const { title} = JSON.parse(req.body);
  console.log(title, '////')
    // Then save the post data to a database
    res.status(200).json({ message: "Post created successfully" });
  }