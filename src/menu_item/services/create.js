import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.bar.create({
      menus_id: req.body.menus_id,
      items_id: req.body.items_id,
      price: req.body.price,
      created_by: user.id,
      is_active: 1
    }).then(menu_item => {
      res.send(menu_item)
    }).catch(err => {
      next(err);
    });
  });
}
