import models from '../../../models';

export default function (req, res, next) {
  return models.rating
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.user },
      ]
    }).then(rating => {
      res.send(rating);
    }).catch(err => {
      next(err);
    });
}
