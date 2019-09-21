import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.good_time.create({
      groups_id: req.body.groups_id,
      bars_id: req.body.bars_id,
      is_booking: req.body.is_booking,
      number_of_participants: req.body.number_of_participants,
      status: req.body.status,
      refusal_purpose: req.body.refusal_purpose,
      created_by: user.id,
      is_active: 1
    }).then(good_time => {
      res.send({ good_time })
    }).catch(err => {
      next(err);
    })
  });
}
