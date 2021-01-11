const express = require('express');

const ironMongeriesController = require('../controllers/ironMongeriesController');

function routes(IronMongery) {
  const controller = ironMongeriesController(IronMongery);
  const ironMongeriesRouter = express.Router();
  ironMongeriesRouter.route('/ironmongeries')
    .post(controller.post)
    .get(controller.get);

  ironMongeriesRouter.use('/ironmongeries/:ironMongeryId', (req, res, next) => {
    IronMongery.findById(req.params.ironMongeryId, (err, ironMongery) => {
      if (err) {
        return res.send(err);
      }
      if (ironMongery) {
        req.ironMongery = ironMongery;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  ironMongeriesRouter.route('/ironmongeries/:ironMongeryId')
    .get((req, res) => {
      res.json(req.ironMongery);
    });

  return ironMongeriesRouter;
}

module.exports = routes;
