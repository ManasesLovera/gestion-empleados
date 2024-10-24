import express, {Request, Response} from 'express';
import { getAll } from '../controllers/employee.controller';

const router = express.Router();

router.get('/', getAll);

export default router;