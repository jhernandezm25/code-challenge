import express from 'express';
import { getAllNames, addName } from '../functions/functions';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get('/getNames', getAllNames);
router.post('/addName', upload.fields([{ name: 'name', maxCount: 1 }, { name: 'avatar', maxCount: 1 }]), addName);

export default router;
