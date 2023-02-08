const userdb = require('./database/user');
const prompt = require('prompt-sync')();

const username = prompt('What is your username? ');
const password = prompt.hide('What is your password? ');
console.log(userdb.getUserByPassword(username, password));
