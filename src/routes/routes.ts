import express, { Request, Response } from 'express';

// routes
import inventory from './inventory';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Successful GET on /');
});

router.use('/inventory', inventory);

export default router;
