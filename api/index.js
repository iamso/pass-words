const create = require('../index');

module.exports = (req, res) => {
  const options = {
    ...req.query,
    ...req.body,
  };
  res.end(create(options));
}
