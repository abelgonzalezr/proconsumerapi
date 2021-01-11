function ironmongeriesController(IronMongery) {
  function post(req, res) {
    const ironMongery = new IronMongery(req.body);
    ironMongery.save();
    return res.status(201).json(ironMongery);
  }

  function get(req, res) {
    const query = {};
    if (req.query.ironmongeryName) {
      query.ironmongeryName = req.query.ironmongeryName;
    } else if (req.query.producDescription) {
      query.producDescription = req.query.producDescription;
    }
    IronMongery.find(query, (err, ironMongeries) => {
      if (err) {
        return res.send(err);
      }
      return res.json(ironMongeries);
    });
  }
  return { post, get };
}

module.exports = ironmongeriesController;
