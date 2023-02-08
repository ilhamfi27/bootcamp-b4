process.on('exit', function (code) {
  console.log('disconnecting database...');
  console.log(`aplication exited with code ${code}`);
});
process.on('beforeExit', function (message) {
  console.log(`before aplication exited with message ${message}`);
});
process.on('uncaughtException', function (message) {
  console.log(`uncaughtException ${message}`);
});

// =========================
process.on('SIGINT', function (message) {
  console.log('try to exit (ctrl + c)');
  process.exit(0)
});

console.log('start');

setTimeout(function () {
  console.log('end');
}, 20000);
