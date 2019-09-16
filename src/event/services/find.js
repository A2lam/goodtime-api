import models from "../../../models";

export default function (req, res, next) {
  return models.event
    .findAll({
      where: { is_active: 1 },
      include: [
        { model: models.bar },
      ]
    })
    .then(events => {
      res.send(events)
    })
    .catch(err => {
      next(err);
    });
}
