import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.group.create({
      name: req.body.name,
      created_by: user.id,
      is_active: 1
    }).then(group => {
      res.send({ group })
    }).catch(err => {
      next(err);
    });
  });
}
