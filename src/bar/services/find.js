import models from "../../../models";

export default function (req, res, next) {
  return models.bar
    .findAll({
      where: { is_active: 1 },
      include: [
        { model: models.address },
        { model: models.user },
      ]
    })
    .then(bars => {
      res.send(bars)
    })
    .catch(err => {
      next(err);
    });
}
