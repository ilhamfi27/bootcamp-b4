process.on('SIGINT', function (message) {
  console.log('try to exit');
});
process.on('SIGTERM', function (message) {
  console.log('try to exit');
});
process.on('SIGTSTP', function (message) {
  console.log('try to suspend');
});

console.log('start');

setTimeout(function() {
  console.log('end');
}, 10000)
