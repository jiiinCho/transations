import type { Request, Response } from 'express';
import * as transationsRepository from '../data/transations';

export async function getById(req: Request, res: Response) {
  const { transaction_id } = req.params;

  // TODO: does not catch empty case
  if (!transaction_id || typeof transaction_id != 'string') {
    return res
      .status(404)
      .json({ message: 'transaction_id missing or has incorrect type.' });
  }

  const transaction = await transationsRepository.getById(transaction_id);

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  res.status(200).json(transaction);
}
