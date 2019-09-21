import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.rating.create({
      users_id: user.id,
      bars_id: req.body.bars_id,
      mark: req.body.mark,
      comment: req.body.comment,
      created_by: user.id,
      is_active: 1
    }).then(rating => {
      res.send({ rating })
    }).catch(err => {
      next(err);
    });
  });
}
