import models from '../../../models';

export default function (req, res, next) {
  // TODO : Sûrement ici je vais juste renvoyé la photo
  // TODO : principale par rapport à un bars_id
  return models.bar_picture
    .findOne({
      where: { id: req.params.id },
      include : [
        { model: models.picture },
      ]
    }).then(bar => {
      res.send(bar);
    }).catch(err => {
      next(err);
    });
}
