import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.item.create({
      name: req.body.name,
      description: req.body.description,
      is_food: req.body.is_food,
      contains_alcohol: req.body.contains_alcohol,
      contains_allergen: req.body.contains_allergen,
      created_by: user.id,
      is_active: 1
    }).then(item => {
      res.send(item)
    }).catch(err => {
      next(err);
    })
  });
}
