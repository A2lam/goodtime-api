import { Router } from 'express';
import models from '../../models';
import upload from '../../config/multer.config';

const router = Router();

router.post('/upload', upload.single("file"), (req, res, next) => {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.picture.create({
      name: req.file.name,
      path: req.file.path,
      created_by: user.id,
      is_active: 1
    }).then(image => {
      res.send(image);
    }).catch(err => {
      next(err);
    });
  });
});

router.get('/images/:url', (req, res) => {
  const url = 'src/images/' + req.params.url;
  res.download(url);
});

export default router;
