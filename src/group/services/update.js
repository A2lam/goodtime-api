import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.group.update({
      name: req.body.name,
      updated_by: user.id,
    }, {
      where: {
        id: req.params.id,
      }
    }).then(group => {
      res.send({ group })
    }).catch(err => {
      next(err);
    });
  });
}
