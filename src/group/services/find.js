import models from "../../../models";

export default function (req, res, next) {
  return models.group
    .findAll({
      where: {
        users_id: req.user.id,
        is_active: 1
      },
      include: [
        { model: models.user },
      ]
    })
    .then(groups => {
      res.send(groups)
    })
    .catch(err => {
      next(err);
    });
}
