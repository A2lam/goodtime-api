import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/images/')
  },
  filename: (req, file, cb) => {
    file.name = file.originalname;

    const date = Date.now();
    const newName = date + "_" + file.originalname.replace(/\s/g, '').toLowerCase();
    file.url = '/images/' + newName;

    cb(null, newName)
  }
});

var upload = multer({storage: storage});

module.exports = upload;
