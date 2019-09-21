import models from '../../../models';

export default function (req, res, next) {
  return models.schedule
    .findOne({
      where: {
        bars_id: req.params.bars_id,
        is_active: 1
      },
      include : [
        { model: models.bar },
      ]
    }).then(schedules => {
      res.send(schedules);
    }).catch(err => {
      next(err);
    });
}
