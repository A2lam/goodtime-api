import models from '../../../models';
import md5 from "md5";

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.user.update({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      username: req.body.username,
      email: req.body.email,
      token: req.body.token,
      user_types_id: req.body.user_types_id,
      pictures_id: req.body.pictures_id,
      favorite_item: req.body.favorite_item,
      max_price: req.body.max_price,
      favorite_transportation: req.body.favorite_transportation,
      updated_by: user.id,
    }, {
      where : {
        id: req.params.id,
      }
    }).then(user_updated => {
        res.send(user_updated);
      }
    ).catch(
      err => next(err)
    );
  });
}
