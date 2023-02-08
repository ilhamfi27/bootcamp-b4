const command = process.argv;

if (command[2] == 'start') {
  console.log('application starting..');
} else if (command[2] == 'restart') {
  console.log('application restarting..');
  console.log('application starting..');
} else {
  console.log('application not starting..');
}

if (command[3] == 'db') {
  console.log('database starting..');
}
