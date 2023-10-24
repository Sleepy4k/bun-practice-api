import App from 'bunrest'
import * as routes from './routes/_index'

const server = App();

// register routes
server.use('/api', routes.userRoute);

// middleware
server.use((req, res, next) => {
  console.log("Init server for " + req.originalUrl);
});

// error handler
server.use((req, res, next, err) => {
  res.status(500)
    .setHeader('Content-Type', 'application/json')
    .json({
      "status": false,
      "message": "Internal Server Error",
      "data": err?.message || null
    });
});

server.listen(3000, () => {
  console.log('App is listening on port 3000');
});