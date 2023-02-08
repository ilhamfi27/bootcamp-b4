function index(request, reponse) {
  response.write(
    JSON.stringify({
      message: 'welcome to products page',
    })
  );
}

module.exports = {
  index,
};
