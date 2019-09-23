import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.discount.create({
      menu_item_id: req.body.menu_item_id,
      amount: req.body.amount,
      begin_at: req.body.begin_at,
      end_at: req.body.end_at,
      created_by: user.id,
      is_active: 1
    }).then(discount => {
      res.send(discount)
    }).catch(err => {
      next(err);
    });
  });
}
