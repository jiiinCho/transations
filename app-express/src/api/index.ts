import express from 'express';
import 'express-async-errors';
import * as transationsController from '../controller/transations';

const router = express.Router();

// GET /transations
router.get('/', transationsController.getAll);

export default router;
