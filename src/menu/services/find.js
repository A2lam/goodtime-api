import models from "../../../models";

export default function (req, res, next) {
  return models.menu
    .findAll({
      where: {
        establishments_id: req.params.bars_id,
        is_active: 1
      }
    })
    .then(bars => {
      res.send(bars)
    })
    .catch(err => {
      next(err);
    });
}
