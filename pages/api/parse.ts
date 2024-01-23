import type { NextApiRequest, NextApiResponse } from 'next';
import { formatSchema } from '@prisma/sdk';
import { ConvertSchemaToObject } from '@paljs/schema';
import fs from 'fs';
import { v4 as uuid } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const path = `${__dirname}/../${uuid()}.prisma`;
  const formattedSchema = await formatSchema({ schema: req.body.schema });
  fs.writeFileSync(path, formattedSchema, 'utf8');
  const schemaObject = new ConvertSchemaToObject(path).run();
  res.json(schemaObject);
  fs.rmSync(path);
}
