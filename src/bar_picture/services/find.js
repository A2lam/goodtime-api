import models from "../../../models";

export default function (req, res, next) {
  return models.bar_picture
    .findAll({
      where: {
        bars_id: req.params.bars_id,
        is_active: 1
      },
      include: [
        { model: models.picture },
      ]
    })
    .then(bar_pictures => {
      res.send(bar_pictures)
    })
    .catch(err => {
      next(err);
    });
}
