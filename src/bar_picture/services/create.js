import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.bar_picture.create({
      bars_id: req.body.bars_id,
      pictures_id: req.body.pictures_id,
      is_main: req.body.is_main,
      created_by: user.id,
      is_active: 1
    }).then(bar_picture => {
      res.send({ bar_picture })
    }).catch(err => {
      next(err);
    });
  });
}
