import express from 'express';
import 'express-async-errors';
import * as accountsController from '../controller/accounts';

const router = express.Router();

// GET /transactions/:transaction_id
router.get('/:account_id', accountsController.getById);

export default router;
