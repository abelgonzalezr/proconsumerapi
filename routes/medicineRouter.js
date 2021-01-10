const express = require('express');

const medicinesController = require('../controllers/medicinesController');

function routes(Medicine) {
  const controller = medicinesController(Medicine);
  const medicinesRouter = express.Router();
  medicinesRouter.route('/medicines')
    .post(controller.post)
    .get(controller.get);

  medicinesRouter.use('/medicines/:medicineId', (req, res, next) => {
    Medicine.findById(req.params.medicineId, (err, medicine) => {
      if (err) {
        return res.send(err);
      }
      if (medicine) {
        req.medicine = medicine;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  medicinesRouter.route('/medicines/:medicineId')
    .get((req, res) => {
      res.json(req.medicine);
    });

  return medicinesRouter;
}

module.exports = routes;
