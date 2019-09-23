import models from '../../../models';

export default function (req, res, next) {
  return models.menu
    .findOne({
      where: { id: req.params.id }
    }).then(menu => {
      res.send(menu);
    }).catch(err => {
      next(err);
    });
}
