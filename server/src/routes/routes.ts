import express from 'express';
import { getAllNames, addName } from '../functions/functions';

const router = express.Router();

router.get('/getNames', getAllNames);
router.post('/addName', addName);

export default router;
