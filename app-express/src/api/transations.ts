import express from 'express';
import 'express-async-errors';
import * as transationsController from '../controller/transations';

const router = express.Router();

// GET /transations/:transaction_id
router.get('/:transaction_id', transationsController.getById);

export default router;
