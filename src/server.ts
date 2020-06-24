import Express, { json } from 'express';
import routes from './routes';

import './database';

const App = Express();

App.use(json());
App.use(routes);
App.listen(3333);
