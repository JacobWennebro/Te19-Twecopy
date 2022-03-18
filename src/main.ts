import bodyParser from 'body-parser';
import Express, { Router } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { GenerateRouter } from './util';

const app = Express();

/* Express middleware */
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

/* Server routes */
app.use('/api', GenerateRouter(Router(), 'api'));

/* Listen on port */
app.listen(3000);