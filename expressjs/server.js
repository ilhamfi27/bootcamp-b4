const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const swagger = require('./docs/swagger.json');

const errorHandling = require('./middleware/errorHandling');

const app = express();

/**
 * middleware
 */
// app.use(
//   cors({
//     origin: '*',
//     methods: ['GET']
//   })
// );
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'abcdefghijklmnopqrstuvwxyz',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

// routing untuk mengambil gambar
app.use(
  '/images',
  express.static('public/images', {
    maxAge: 1000 * 60 * 2, // 2 minutes
  })
);

/**
 * routing
 */
const routesApiV1 = require('./routes/v1routes');
const routesApiV2 = require('./routes/v2routes');
const routesApiV3 = require('./routes/v3routes');

app.use('/api/v1', routesApiV1);
app.use('/api/v2', routesApiV2);
app.use('/api/v3', routesApiV3);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagger));
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
