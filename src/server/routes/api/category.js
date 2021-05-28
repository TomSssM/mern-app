import { Router } from 'express';

const router = Router();

// todo:
router.get('/', (req, res) => {
  res.json({
    all: true,
  });
});

// todo:
router.get('/:id', (req, res) => {
  res.json({
    yourId: req.params.id,
  });
});

export default router;
