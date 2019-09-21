import models from '../../../models';

export default function (req, res, next) {
  return models.group
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.user },
      ]
    }).then(group => {
      res.send(group);
    }).catch(err => {
      next(err);
    });
}
