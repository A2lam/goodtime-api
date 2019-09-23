import models from '../../../models';

export default function (req, res, next) {
  return models.item
    .findOne({
      where: { id: req.params.id }
    }).then(item => {
      res.send(item);
    }).catch(err => {
      next(err);
    });
}
