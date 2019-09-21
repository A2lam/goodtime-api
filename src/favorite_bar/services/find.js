import models from "../../../models";

export default function (req, res, next) {
  return models.favorite_bar
    .findAll({
      where: {
        users_id: req.params.users_id,
        is_active: 1
      },
      include: [
        { model: models.bar },
      ]
    })
    .then(bars => {
      res.send(bars)
    })
    .catch(err => {
      next(err);
    });
}
