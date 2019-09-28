import models from '../../../models';

export default function (req, res, next) {
  return models.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(user => {
    return models.address.update({
      number: req.body.number,
      street: req.body.street,
      complement: req.body.complement,
      post_code: req.body.post_code,
      city: req.body.city,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }, {
      where : {
        id: req.body.addresses_id,
      }
    }).then(address => {
      return models.bar.update({
        name: req.body.name,
        addresses_id: address.id,
        users_id: user.id,
        phone: req.body.phone,
        type: req.body.type,
        updated_by: user.id,
      }, {
        where: {
          id: req.params.id,
        }
      }).then(bar => {
        res.send({bar, address})
      }).catch(err => {
        next(err);
      })
    });
  })
}
