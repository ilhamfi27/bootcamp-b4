const express = require('express');
const bodyParser = require('body-parser');

const showtime = require('./middleware/showtime');
const greetings = require('./middleware/greetings');
const errorHandling = require('./middleware/errorHandling');
const authorization = require('./middleware/authorization');

const app = express();

/**
 * middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(showtime);
app.use(greetings);

/**
 * routing
 */
const routesApiV1 = require('./routes/v1routes');
const routesApiV2 = require('./routes/v2routes');

app.use('/api/v1', routesApiV1);
app.use('/api/v2', routesApiV2);
app
  .route('*')
  .get((req, res) => {
    res.send("you're inside fallback route");
  })
  .post((req, res) => {
    res.send("you're inside fallback route");
  })
  .put((req, res) => {
    res.send("you're inside fallback route");
  })
  .delete((req, res) => {
    res.send("you're inside fallback route");
  });
/**
 * error handling
 */
app.use(errorHandling);

app.listen(3000, () => {
  console.log('application listen on http://localhost:3000');
});
