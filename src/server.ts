import Express, { json } from 'express';
import routes from './routes';

const App = Express();

App.use(json());
App.use(routes);
App.listen(3333);
