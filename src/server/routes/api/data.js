import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  // todo:
  // console.log('GOT A GET REQUEST');
  // console.log(req.cookies);
  // res.json([
  //   {
  //     id: '1',
  //     msg: 'one',
  //   },
  //   {
  //     id: '2',
  //     msg: 'too',
  //   },
  // ]);
});

router.get('/:id', (req, res) => {
  // todo:
  // res.json({
  //   id: req.params.id,
  //   msg: 'success',
  // });
});

// todo:
router.post('/:id', (req, res) => {
  // todo:
  // console.log('GOT A POST REQUEST:', req.cookies);
  // res.json({
  //   id: req.params.id,
  //   posted: true,
  //   msg: req.body,
  // });
});

export default router;
