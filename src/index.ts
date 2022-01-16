import express from 'express';

import routes from './routes/routes';

const PORT = 8000;
const API_ROOT = '/api';

const app = express();

app.use(API_ROOT, routes);

app.listen(PORT);
console.log(`listening on port ${PORT}`);

export = app;
