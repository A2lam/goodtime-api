import md5 from 'md5';
import models from '../../../models';

export default function (req, res, next) {
  return models.user.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    user_types_id: req.body.user_types_id,
    created_by: req.body.created_by,
    // created_at:
    is_active: 1
  }).then(user => {
    res.send({ user })
  }).catch(err => {
    next(err);
  });
}
