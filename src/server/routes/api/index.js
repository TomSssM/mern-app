import { Router } from 'express';
import authRoutes from './auth';
import dataRoutes from './data';

const router = Router();

router.use('/auth', authRoutes);
router.use('/data', dataRoutes);

export default router;
