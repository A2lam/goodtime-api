import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.menu_item.update({
      updated_by: user.id,
      is_active: 0
    }, {
      where : {
        id: req.params.id,
      }
    }).then(
      res.send({ "return": "OK" })
    ).catch(
      err => next(err)
    );
  });
}
