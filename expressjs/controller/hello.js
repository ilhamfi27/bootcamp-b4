function index(req, res) {
  const obj = undefined;
  console.log(obj.product);
  res.send({ message: 'hello world' });
}
module.exports = {
  index,
};
