require('dotenv').config()

console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);

console.log(process.env.ENV_ILHAM);
process.env.ENV_ILHAM = "HEHEHE"
console.log(process.env.ENV_ILHAM);
