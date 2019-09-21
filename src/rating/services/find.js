import models from "../../../models";

export default function (req, res, next) {
  return models.rating
    .findAll({
      where: {
        bars_id: req.params.bars_id,
        is_active: 1
      },
      include: [
        { model: models.user },
      ]
    })
    .then(ratings => {
      res.send(ratings)
    })
    .catch(err => {
      next(err);
    });
}
