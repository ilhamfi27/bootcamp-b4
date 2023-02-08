const prompt = require('prompt-sync')()
const userdb = require('./database/user')
const username = prompt('Masukkan username anda: ')
const password = prompt.hide('Masukkan password anda: ')
console.log(userdb.getUserByPassword(username, password));
