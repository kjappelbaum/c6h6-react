import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true,
    username: 'anonymous',
    admin: false,
    provider: null,
    authenticated: false,
  });
}
