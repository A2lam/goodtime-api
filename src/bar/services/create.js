import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.address.create({
      number: req.body.number,
      street: req.body.street,
      complement: req.body.complement,
      post_code: req.body.post_code,
      city: req.body.city,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }).then(address => {
      return models.bar.create({
        name: req.body.name,
        description: req.body.description,
        addresses_id: address.id,
        users_id: user.id,
        phone: req.body.phone,
        type: req.body.type,
        created_by: user.id,
        is_active: 1
      }).then(bar => {
        res.send({bar, address})
      }).catch(err => {
        next(err);
      })
    });
  });
}
