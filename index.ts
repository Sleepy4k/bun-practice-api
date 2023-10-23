import App from 'bunrest'
import { UserController } from './controller/_index'

const server = App();

server.get('/user', UserController.index);
server.get('/user/:id', UserController.show);

// use
server.use((req, res, next) => {
  console.log("Init server for " + req.originalUrl);
});

server.listen(3000, () => {
  console.log('App is listening on port 3000');
});