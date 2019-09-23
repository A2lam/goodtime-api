import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.menu.update({
      menu_section: req.body.menu_section,
      updated_by: user.id,
    }, {
      where: {
        id: req.params.id,
      }
    }).then(menu => {
      res.send(menu)
    }).catch(err => {
      next(err);
    });
  })
}
