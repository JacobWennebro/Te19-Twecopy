import bodyParser from 'body-parser';
import Express, { Router } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path';
import { GenerateRouter } from './util';

const app = Express();

app.set('view engine', 'ejs');

/* Express middleware */
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/storage', Express.static('static'));

/* Server routes */
app.use('/', GenerateRouter(Router(), 'view'));
app.use('/api', GenerateRouter(Router(), 'api'));

/* Listen on port */
app.listen(3000);