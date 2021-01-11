const express = require('express');

const foodsController = require('../controllers/foodsController');

function routes(Food) {
  const controller = foodsController(Food);
  const foodsRouter = express.Router();
  foodsRouter.route('/foods')
    .post(controller.post)
    .get(controller.get);

  foodsRouter.use('/foods/:foodId', (req, res, next) => {
    Food.findById(req.params.foodId, (err, food) => {
      if (err) {
        return res.send(err);
      }
      if (food) {
        req.food = food;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  foodsRouter.route('/foods/:foodId')
    .get((req, res) => {
      res.json(req.food);
    });

  return foodsRouter;
}

module.exports = routes;
