function medicinesController(Medicine) {
  function post(req, res) {
    const medicine = new Medicine(req.body);
    medicine.save();
    return res.status(201).json(medicine);
  }

  function get(req, res) {
    const query = {};
    if (req.query.drugsstoreName) {
      query.drugsstoreName = req.query.drugsstoreName;
    } else if (req.query.medicineName) {
      query.medicineName = req.query.medicineName;
    }
    Medicine.find(query, (err, medicines) => {
      if (err) {
        return res.send(err);
      }
      return res.json(medicines);
    });
  }
  return { post, get };
}

module.exports = medicinesController;
