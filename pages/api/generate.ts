import type { NextApiRequest, NextApiResponse } from 'next';
import { formatSchema } from '@prisma/sdk';
import { jsonToPrismaSchema } from '../../lib/prisma-json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const formattedSchema = await formatSchema({
    schema: jsonToPrismaSchema(req.body.schema),
  });
  res.send(formattedSchema);
  // res.status(200).json({ message: 'Hello from Next.js!' });
}
