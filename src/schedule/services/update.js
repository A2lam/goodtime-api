import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.schedule.update({
      bars_id: req.body.bars_id,
      weekday: req.body.weekday,
      open: req.body.open,
      is_hh: req.body.is_hh,
      hour: req.body.hour,
      notes: req.body.notes,
      updated_by: user.id,
    }, {
      where: {
        id: req.params.id,
      }
    }).then(schedule => {
      res.send(schedule)
    }).catch(err => {
      next(err);
    })
  })
}
