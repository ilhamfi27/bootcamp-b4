module.exports = (req, res, next) => {
  if (isNaN(req.params.id)) {
    res.status(400).send({ message: 'id must be a number' });
  } else {
    console.log('nama mobil: ', req.params.name, req.params.id);
    next();
  }
};
