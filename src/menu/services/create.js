import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.menu.create({
      menu_section: req.body.menu_section,
      establishments_id: req.body.establishments_id,
      created_by: user.id,
      is_active: 1
    }).then(menu => {
      res.send(menu)
    }).catch(err => {
      next(err);
    })
  });
}
