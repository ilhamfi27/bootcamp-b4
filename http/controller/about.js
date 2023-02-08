function index(request, response) {
  const method = request.method;
  if (method == 'GET') {
    response.write(
      JSON.stringify({
        message: `welcome to about method GET`,
      })
    );
  } else if (method == 'POST') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    });
    request.on('end', () => {
      const hasil = JSON.parse(Buffer.concat(body).toString());
      console.log(hasil);
      response.write(
        JSON.stringify({
          message: `welcome to about method POST`,
        })
      );
    });
  }
}

module.exports = {
  index,
};
