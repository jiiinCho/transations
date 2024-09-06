import type { Request, Response } from 'express';
import * as transactionsRepository from '../data/transactions';

export async function getAll(req: Request, res: Response) {
  const transations = await transactionsRepository.getAll();
  res.status(200).json(transations);
}

export async function getById(req: Request, res: Response) {
  const { transaction_id } = req.params;

  // TODO: does not catch empty case
  if (!transaction_id || typeof transaction_id !== 'string') {
    return res
      .status(404)
      .json({ message: 'transaction_id missing or has incorrect type.' });
  }

  const transaction = await transactionsRepository.getById(transaction_id);

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  res.status(200).json(transaction);
}

export async function create(req: Request, res: Response) {
  const { account_id, amount } = req.body;

  // Validate request body
  if (!account_id || typeof amount !== 'number') {
    return res
      .status(400)
      .send('Mandatory body parameters missing or have incorrect type');
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Specified HTTP method not allowed');
  }

  if (!req.is('application/json')) {
    return res.status(415).send('Specified content type not allowed');
  }

  const transaction = await transactionsRepository.create({
    account_id,
    amount,
  });

  if (!transaction) {
    return res.status(404).send('Account not found');
  }

  res.status(201).json(transaction);
}
