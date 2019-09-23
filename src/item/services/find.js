import models from "../../../models";

export default function (req, res, next) {
  return models.item
    .findAll({
      where: { is_active: 1 }
    })
    .then(items => {
      res.send(items)
    })
    .catch(err => {
      next(err);
    });
}
