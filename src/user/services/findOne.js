import models from '../../../models';

export default function (req, res, next) {
  return models.user
    .findOne({
      where: {id: req.params.id},
      include : [
        { model: models.user_type },
        { model: models.picture },
      ]
    }).then(user => {
      res.send(user);
    }).catch(err => {
      next(err);
    });
}
