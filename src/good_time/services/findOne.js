import models from '../../../models';

export default function (req, res, next) {
  return models.good_time
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.group }
      ]
    }).then(good_time => {
      res.send(good_time);
    }).catch(err => {
      next(err);
    });
}
