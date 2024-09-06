import type { Request, Response } from 'express';
import * as transationsRepository from '../data/accounts';

export async function getAll(req: Request, res: Response) {
  const data = await transationsRepository.getAll();
  res.status(200).json(data);
}
