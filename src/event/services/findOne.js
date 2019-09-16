import models from '../../../models';

export default function (req, res, next) {
  return models.event
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.bar },
      ]
    }).then(event => {
      res.send(event);
    }).catch(err => {
      next(err);
    });
}
