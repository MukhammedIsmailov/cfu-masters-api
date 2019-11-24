import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as serve from 'koa-static';

import 'reflect-metadata';

import { getConfig } from './config';
import routes from './routes'

const app = new Koa();
const port = getConfig().appPort;

app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(cors());
app.use(serve('./data'));

app.use(routes.routes()).use(routes.allowedMethods());

app.listen(port, () => {
    console.log(port);
});