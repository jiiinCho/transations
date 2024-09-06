import type { Request, Response } from 'express';
import * as accountsRepository from '../data/accounts';

export async function getById(req: Request, res: Response) {
  const { account_id } = req.params;

  // TODO: does not catch empty case
  if (!account_id || typeof account_id !== 'string') {
    return res
      .status(404)
      .json({ message: 'account_id missing or has incorrect type.' });
  }

  const account = await accountsRepository.getById(account_id);

  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  res.status(200).json(account);
}
