function foodsController(Food) {
  function post(req, res) {
    const food = new Food(req.body);
    food.save();
    return res.status(201).json(food);
  }

  function get(req, res) {
    const query = {};
    if (req.query.superMarkerName) {
      query.superMarkerName = req.query.superMarkerName;
    } else if (req.query.producDescription) {
      query.producDescription = req.query.producDescription;
    }
    Food.find(query, (err, foods) => {
      if (err) {
        return res.send(err);
      }
      return res.json(foods);
    });
  }
  return { post, get };
}

module.exports = foodsController;
