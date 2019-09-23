import models from "../../../models";

export default function (req, res, next) {
  return models.discount
    .findAll({
      where: { is_active: 1 },
      include: [
        { model: models.menu_item }
      ]
    })
    .then(discounts => {
      res.send(discounts)
    })
    .catch(err => {
      next(err);
    });
}
