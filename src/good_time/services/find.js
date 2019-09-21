import models from "../../../models";

export default function (req, res, next) {
  return models.good_time
    .findAll({
      where: {
        created_by: req.user.id,
        is_active: 1
      },
      include: [
        { model: models.group },
      ]
    })
    .then(good_times => {
      res.send(good_times)
    })
    .catch(err => {
      next(err);
    });
}
