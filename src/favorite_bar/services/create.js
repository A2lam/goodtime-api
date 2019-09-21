import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.favorite_bar.create({
      users_id: user.id,
      bars_id: req.body.bars_id,
      created_by: user.id,
      is_active: 1
    }).then(favorite_bar => {
      res.send({ favorite_bar });
    }).catch(err => {
      next(err);
    });
  });
}
