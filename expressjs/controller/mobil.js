const mobilModel = require('../models/mobil');

async function fetch(req, res) {
  const data = await mobilModel.fetchMobil();
  res.send(data);
}
async function getOne(req, res) {
  const mobilId = req.params.id;
  const data = await mobilModel.getOneMobil(mobilId);
  res.send(data);
}
async function create(req, res) {
  const body = req.body;
  const data = await mobilModel.createMobil(body);
  res.send(data);
}
async function update(req, res) {
  const mobilId = req.params.id;
  const body = req.body;
  const data = await mobilModel.updateMobil(body, mobilId);
  res.send(data);
}
async function destroy(req, res) {
  const mobilId = req.params.id;
  const data = await mobilModel.deleteMobil(mobilId);
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
