import models from '../../../models';

export default function (req, res, next) {
  return models.bar
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.address },
        { model: models.user },
      ]
    }).then(bar => {
      res.send(bar);
    }).catch(err => {
      next(err);
    });
}
