import models from '../../../models';

export default function (req, res, next) {
  return models.discount
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.menu_item }
      ]
    }).then(discount => {
      res.send(discount);
    }).catch(err => {
      next(err);
    });
}
