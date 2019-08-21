import models from '../../../models';

export default function (req, res, next) {
  return models.user.update({
    is_active: 0
  }, {
    where: {
      id: req.body.id,
    }
  }).then(
    res.send({ "return": "OK" })
  ).catch(
    err => next(err)
  );
}
