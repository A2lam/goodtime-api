import models from "../../../models";

export default function (req, res, next) {
  return models.menu_item
    .findAll({
      where: {
        menus_id: req.params.menus_id,
        is_active: 1
      }
    })
    .then(menu_items => {
      res.send(menu_items)
    })
    .catch(err => {
      next(err);
    });
}
