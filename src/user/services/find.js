import models from "../../../models";

export default function (req, res, next) {
  return models.user
    .findAll({
      include: [
        { model: models.user_type },
        { model: models.picture },
      ]
    })
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      next(err);
    });
}
