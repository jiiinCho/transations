import express from 'express';
import 'express-async-errors';
import * as transactionsController from '../controller/transactions';

const router = express.Router();

// GET /transactions/
router.get('/', transactionsController.getAll);

// GET /transactions/:transaction_id
router.get('/:transaction_id', transactionsController.getById);

// POST /transactions
router.post('/', transactionsController.create);

export default router;
