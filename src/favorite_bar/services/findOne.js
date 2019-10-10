import models from "../../../models";

export default function (req, res, next) {
  return models.favorite_bar
    .findOne({
      where: {
        users_id: req.user.id,
        bars_id: req.params.bars_id,
        is_active: 1
      }
    })
    .then(favoriteBar => {
      res.send(favoriteBar)
    })
    .catch(err => {
      next(err);
    });
}
