import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.event.update({
      name: req.body.name,
      description: req.body.description,
      bars_is: req.body.bars_id,
      date: req.body.date,
      updated_by: user.id,
    }).then(event => {
      res.send({ event })
    }).catch(err => {
      next(err);
    });
  });
}